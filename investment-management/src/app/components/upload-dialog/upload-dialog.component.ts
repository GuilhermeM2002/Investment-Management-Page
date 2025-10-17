import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { StatementImportService } from '../../services/statement-import.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  templateUrl: './upload-dialog.component.html',
  styleUrl: './upload-dialog.component.scss',
})
export class UploadDialogComponent {
  selectedFile: File | null = null;
  userId: number = 12345;
  fileType: 'csv' | 'xlsx' | null = null;
  isUploading = false;
  message = '';

  constructor(
    private statementImportService: StatementImportService,
    private dialogRef: MatDialogRef<UploadDialogComponent>
  ) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const extension = file.name.split('.').pop()?.toLowerCase();
      if (extension === 'csv' || extension === 'xlsx') {
        this.fileType = extension as 'csv' | 'xlsx';
      } else {
        this.message = 'Tipo de arquivo inválido. Use CSV ou XLSX.';
        this.selectedFile = null;
        this.fileType = null;
      }
    }
  }

  uploadFile(): void {
    if (!this.selectedFile || !this.fileType) {
      this.message = 'Selecione um arquivo CSV ou XLSX antes de enviar.';
      return;
    }

    this.isUploading = true;
    const formData = new FormData();
    formData.append('userId', this.userId.toString());
    formData.append('file', this.selectedFile);

    const upload$ =
      this.fileType === 'csv'
        ? this.statementImportService.importCsv(this.userId, this.selectedFile)
        : this.statementImportService.importXlsx(this.userId, this.selectedFile);

    upload$.subscribe({
      next: () => {
        this.message = 'Upload realizado com sucesso!';
        this.isUploading = false;
        setTimeout(() => this.dialogRef.close(true), 1000);
      },
      error: (err) => {
        console.error(err);
        this.message = 'Erro ao fazer upload. Tente novamente.';
        this.isUploading = false;
      },
    });
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }
}

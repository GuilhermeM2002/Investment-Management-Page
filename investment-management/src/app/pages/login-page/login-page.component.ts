import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { DefaultLoginLayout } from "../../components/default-login-layout/default-login-layout";
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login-page',
  imports: [DefaultLoginLayout, PrimaryInputComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
    loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success("Success on Login!"),
      error: () => this.toastService.error("Unexpected error!"),
    })
  }

  navigate(){
    this.router.navigate(["signup"])
  }
}

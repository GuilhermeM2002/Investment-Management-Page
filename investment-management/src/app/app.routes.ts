import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AddInvestmentFormPageComponent } from './pages/add-investment-form-page/add-investment-form-page.component';
import { InvestmentPageComponent } from './pages/investment-page/investment-page.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardPageComponent
    },
    {
        path: 'add-investment',
        component: AddInvestmentFormPageComponent
    },
    {
        path: 'investments',
        component: InvestmentPageComponent
    }
];

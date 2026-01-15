import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AddInvestmentFormPageComponent } from './pages/add-investment-form-page/add-investment-form-page.component';
import { InvestmentPageComponent } from './pages/investment-page/investment-page.component';
import { AlertPageComponent } from './pages/alert-page/alert-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

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
    },
    {
        path: 'alerts',
        component: AlertPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'signup',
        component: SignupPageComponent
    }
];

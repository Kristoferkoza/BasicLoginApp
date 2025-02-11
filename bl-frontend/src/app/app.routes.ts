import { Routes } from '@angular/router';
import { AppPageComponent } from './app-page/app-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FirstPageComponent } from './first-page/first-page.component';

export const routes: Routes = [
    {
        path: 'first-page',
        component: FirstPageComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'app-page',
        component: AppPageComponent,
    },
    {
        path: '',
        redirectTo: '/first-page',
        pathMatch: 'full',
    }
];

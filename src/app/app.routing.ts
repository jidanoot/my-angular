import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];


export const routing = RouterModule.forRoot(appRoutes);

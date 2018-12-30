import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main/main.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {AperoComponent} from './main/main/apero/apero.component';
import {AperoCreateComponent} from './main/main/apero/apero-create/apero-create.component';

const routes: Routes = [
  {path: '', redirectTo: '/main/apero', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'main', canActivate: [AuthGuard], component: MainComponent,
    children: [
      {path: 'apero', component: AperoComponent},
      {path: 'apero-create', component: AperoCreateComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

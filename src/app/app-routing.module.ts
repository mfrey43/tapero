import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main/main.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {AperoComponent} from './main/main/apero/apero.component';
import {AperoCreateComponent} from './main/main/apero/apero-create/apero-create.component';
import {TapComponent} from './main/main/apero/tap/tap.component';
import {AperoNextComponent} from './main/main/apero/apero-next/apero-next.component';
import {AperoViewComponent} from './main/main/apero/apero-view/apero-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'main', canActivate: [AuthGuard], component: MainComponent,
    children: [
      {path: '', component: TapComponent},
      {path: 'apero', component: AperoComponent},
      {path: 'apero-create', component: AperoCreateComponent},
      {path: 'apero-view', component: AperoViewComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

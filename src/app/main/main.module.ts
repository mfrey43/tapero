import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {AppMaterialModule} from '../app-material.module';
import {AppRoutingModule} from '../app-routing.module';
import { AperoComponent } from './main/apero/apero.component';
import { AperoCreateComponent } from './main/apero/apero-create/apero-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TapComponent } from './main/apero/tap/tap.component';
import { AperoNextComponent } from './main/apero/apero-next/apero-next.component';
import { AperoViewComponent } from './main/apero/apero-view/apero-view.component';

@NgModule({
  declarations: [MainComponent, AperoComponent, AperoCreateComponent, TapComponent, AperoNextComponent, AperoViewComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ]
})
export class MainModule {
}

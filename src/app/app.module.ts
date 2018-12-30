import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainModule} from './main/main.module';
import {AuthModule} from './auth/auth.module';
import {AppMaterialModule} from './app-material.module';
import {MAT_DATE_LOCALE} from '@angular/material';
import localeDECH from '@angular/common/locales/de-CH';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeDECH);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'Tapero'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MainModule,
    AuthModule,
    AppMaterialModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-CH'},
    {provide: LOCALE_ID, useValue: 'de-CH'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

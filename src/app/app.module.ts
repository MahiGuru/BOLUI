import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HariBolModule } from './@haribol/haribol.module';
import { haribolConfig } from './@haribol/config/haribol.config';
import { HaribolLayoutModule } from './layout/layout.module';
import { LoginComponent } from './features/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HariBolModule.forRoot(haribolConfig),
    HaribolLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DefaultViewComponent } from './default-view.component';
import { HeartButtonComponent } from './heart-button.component';
import { LizardMessageComponent } from './lizard-message.component';

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    DefaultViewComponent,
    HeartButtonComponent,
    LizardMessageComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from '../app/app-routing.module';

import { AppComponent } from '../app/app.component';
import { DefaultViewComponent } from '../app/default-view.component';
import { HeartButtonComponent } from '../app/heart-button.component';
import { LizardMessageComponent } from '../app/lizard-message.component';

import { MessageService } from '../app/message.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import '../rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 }),
  ],
  declarations: [
    AppComponent,
    DefaultViewComponent,
    HeartButtonComponent,
    LizardMessageComponent
  ],
  providers: [ MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

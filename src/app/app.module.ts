import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DefaultViewComponent } from './default-view.component';
import { HeartButtonComponent } from './heart-button.component';
import { LizardMessageComponent } from './lizard-message.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MessageService } from './message.service';

import './rxjs-extensions';

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

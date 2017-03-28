import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';
import '../assets/styles/main.scss';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);

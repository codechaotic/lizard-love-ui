import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultViewComponent } from './default-view.component';

const routes: Routes = [
  { path: '', component: DefaultViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutfullComponent } from './layoutfull/layoutfull.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutfullComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
  ]
})
export class LayoutModule { }

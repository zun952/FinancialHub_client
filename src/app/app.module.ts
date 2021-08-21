import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CoinsComponent } from './coins/coins.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ReuseableFormsComponent } from './reuseable-forms/reuseable-forms.component';
import { ChartFormComponent } from './chart-form/chart-form.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoinsComponent,
    CopyrightComponent,
    ReuseableFormsComponent,
    ChartFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

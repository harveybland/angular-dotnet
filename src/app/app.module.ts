import { ThirdPartyModule } from './modules/third-party/third-party.module';
import { EmployeeService } from './Employee/Employee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ThirdPartyModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

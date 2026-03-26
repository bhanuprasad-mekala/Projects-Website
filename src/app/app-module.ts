import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskBar } from './task-bar/task-bar';
import { DesktopApplications } from './desktop-applications/desktop-applications';

@NgModule({
  declarations: [App, TaskBar, DesktopApplications],
  imports: [BrowserModule, CommonModule, AppRoutingModule, FontAwesomeModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TimerComponent } from './components/timer/timer.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [AppComponent, MainPageComponent, TimerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

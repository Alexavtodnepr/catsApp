import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgCardComponent } from './components/img-card/img-card.component';
import { CatsInfoComponent } from './components/img-card/cats-info/cats-info.component';
import { NgxsModule } from '@ngxs/store';
import { CatState } from 'src/app/store/catArray.state';
import { ImageDialogComponent } from './components/img-card/image-dialog/image-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    ImgCardComponent,
    CatsInfoComponent,
    ImageDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([CatState]),
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

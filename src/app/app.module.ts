import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FirstSectionComponent } from './home/first-section/first-section.component';
import { SecoundSectionComponent } from './home/secound-section/secound-section.component';
import { ThirdSectionComponent } from './home/third-section/third-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FirstSectionComponent,
    SecoundSectionComponent,
    ThirdSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

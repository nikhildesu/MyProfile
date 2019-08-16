import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule} from './routing/routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './application-components/portfolio/portfolio.component';
import { ContactComponent } from './application-components/contact/contact.component';
import { HighlightsComponent } from './application-components/highlights/highlights.component';
import { MyStoryComponent } from './application-components/my-story/my-story.component';
import { PageNotFoundComponent } from './common-components/page-not-found/page-not-found.component';
import { HeaderComponent } from './layout-components/header/header.component';
import { HomeComponent } from './layout-components/home/home.component';
import { IntroComponent } from './application-components/intro/intro.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { HireDialogComponent } from './common-components/hire-dialog/hire-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ContactComponent,
    HighlightsComponent,
    MyStoryComponent,
    PageNotFoundComponent,
    HeaderComponent,
    HomeComponent,
    IntroComponent,
    HireDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HireDialogComponent]
})
export class AppModule { }

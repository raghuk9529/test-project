import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { routing } from './app.routing';
import { FeaturesComponent } from './features/features.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import {  HttpModule } from '@angular/http';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { StdDirective } from './std.directive';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BodyComponent,
    FeaturesComponent,
    CarouselComponent,
    PageNoteFoundComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    ProductDetailesComponent,
    StdDirective,
    
    
  ],
  imports: [
    BrowserModule,FormsModule,routing,ReactiveFormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

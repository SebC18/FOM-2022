import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RaveSpecsComponent } from './components/rave-specs/rave-specs.component';
import { KaleidosComponent } from './components/kaleidos/kaleidos.component';
import { SunglassesComponent } from './components/sunglasses/sunglasses.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    RaveSpecsComponent,
    KaleidosComponent,
    SunglassesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

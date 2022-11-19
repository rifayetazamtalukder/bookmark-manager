import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "./controllers/shared-modules/material/material.module";
import { HeaderComponent } from './components/shared/header/header.component';
import { CategoryComponent } from './components/shared/category/category.component';
import { CategoryDetailsComponent } from './components/shared/category-details/category-details.component';
import { AddCategoryComponent } from './components/shared/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    CategoryDetailsComponent,
    AddCategoryComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

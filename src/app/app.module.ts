// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WikiApiService } from './wiki-api.service';

@NgModule({
  declarations: [
    SearchComponent
    // Other components if any
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    // Other modules if any
  ],
  providers: [WikiApiService],
  // bootstrap: [AppComponent]
})
export class AppModule { }

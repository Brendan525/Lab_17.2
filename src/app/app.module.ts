import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SingleResultComponent } from './single-result/single-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

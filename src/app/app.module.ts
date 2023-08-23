import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuralTemplateComponent } from './mural-template/mural-template.component';
import { MenuTemplateComponent } from './menu-template/menu-template.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { CaliforniaComponent } from './california/california.component';

@NgModule({
  declarations: [
    AppComponent,
    MuralTemplateComponent,
    MenuTemplateComponent,
    HomeTemplateComponent,
    CaliforniaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

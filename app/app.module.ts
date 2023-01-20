import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDatepickerModule, BsLocaleService, BsDatepickerConfig, } from 'ngx-bootstrap/datepicker';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TypeComponent } from './type/type.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TypeComponent,
    ContactComponent,
  ],
    imports: [
      BsDatepickerModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule
    ],
  providers: [
    BsLocaleService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

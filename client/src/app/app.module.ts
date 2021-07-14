import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './navBar/navBar.module';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material/material.module';
import { PreRegModule } from './PreReg/prereg.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NavBarModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    MaterialModule,
    PreRegModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

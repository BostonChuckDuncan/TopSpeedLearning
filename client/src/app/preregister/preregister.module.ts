import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreregisterRoutingModule } from './preregister-routing.module';
import { PreregisterComponent } from './preregister.component';
import { AboutUsComponent } from './Contacts/about-us/about-us.component';
import { ConsultingComponent } from './Contacts/consulting/consulting.component';
import { ContactUsComponent } from './Contacts/contact-us/contact-us.component';
import { SupportComponent } from './Contacts/support/support.component';
import { ExamplesComponent } from './Guides/examples/examples.component';
import { TutorialsComponent } from './Guides/tutorials/tutorials.component';
import { TopSpeedHelpsComponent } from './OverView/top-speed-helps/top-speed-helps.component';
import { UserTypesComponent } from './OverView/user-types/user-types.component';
import { WhatsTopSpeedComponent } from './OverView/whats-top-speed/whats-top-speed.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PreregisterComponent,
    AboutUsComponent,
    ConsultingComponent,
    ContactUsComponent,
    SupportComponent,
    ExamplesComponent,
    TutorialsComponent,
    TopSpeedHelpsComponent,
    UserTypesComponent,
    WhatsTopSpeedComponent
  ],
  imports: [
    CommonModule,
    PreregisterRoutingModule,
//    BrowserModule,
    HttpClientModule,
//    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
})
export class PreregisterModule { }

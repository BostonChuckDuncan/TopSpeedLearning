import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashPageComponent } from './SplashPage.component';
import { NavBarModule } from '../navBar/navBar.module';
import { OverviewModule } from '../PreReg/OverView/Overview.Module';
import { GuidesModule } from '../PreReg/Guides/guides.module';
import { ContactsModule } from '../PreReg/Contacts/contacts.module';
import { PreRegModule } from '../PreReg/prereg.module';


@NgModule({
  imports: [
    CommonModule,
    NavBarModule,
    PreRegModule
  ],
  declarations: [
    SplashPageComponent
  ],
  exports: [
    PreRegModule
  ]
})
export class SplashPageModule { }

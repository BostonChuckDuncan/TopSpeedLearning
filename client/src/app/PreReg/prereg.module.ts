import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { OverviewModule } from './OverView/overview.module';
import { RouterModule } from '@angular/router';
import {GuidesModule} from './Guides/guides.module';
import {ContactsModule} from './Contacts/contacts.module';
import {OverviewModule} from './OverView/Overview.Module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    OverviewModule,
    GuidesModule,
    ContactsModule
  ],
  exports: [
    OverviewModule,
    GuidesModule,
    ContactsModule,
  ],
  declarations: [
  ]
})
export class PreRegModule { }

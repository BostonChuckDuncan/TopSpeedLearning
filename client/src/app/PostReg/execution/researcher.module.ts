import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule} from 'ngx-bootstrap/alert';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [

   ],
   imports: [
    CommonModule,
    AlertModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule
   ],
   exports: [

   ]
})
export class ResearcherModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExamplesComponent,
    TutorialsComponent
  ],
  exports: [
    ExamplesComponent,
    TutorialsComponent
  ]
})
export class GuidesModule { }

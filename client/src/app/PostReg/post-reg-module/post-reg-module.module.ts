import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from '../admin/admin.module';
import { ResearcherModule } from '../execution/researcher.module';
import { ResearchContainerComponent } from '../research-container/research-container.component';
import { RouterModule } from '@angular/router';
import { CreateEditComponent } from '../design/create-edit/create-edit.component';
import { CopyDeleteComponent } from '../design/copy-delete/copy-delete.component';
import { ShareProjectComponent } from '../design/ShareProject/ShareProject.component';
import { NavBarModule } from 'src/app/navBar/navBar.module';


@NgModule({
  declarations: [
    ResearchContainerComponent,
    CreateEditComponent,
    CopyDeleteComponent,
    ShareProjectComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    RouterModule,
    ResearcherModule,
    NavBarModule
  ],
  exports: [
    AdminModule,
    ResearcherModule,
    ResearchContainerComponent,
    NavBarModule
  ]
})
export class PostRegModuleModule { }

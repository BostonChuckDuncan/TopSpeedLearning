import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './PreReg/Contacts/about-us/about-us.component';
import { ContactUsComponent } from './PreReg/Contacts/contact-us/contact-us.component';
import { SupportComponent } from './PreReg/Contacts/support/support.component';
import { ExamplesComponent } from './PreReg/Guides/examples/examples.component';
import { TutorialsComponent } from './PreReg/Guides/tutorials/tutorials.component';
import { TopSpeedHelpsComponent } from './PreReg/OverView/top-speed-helps/top-speed-helps.component';
import { UserTypesComponent } from './PreReg/OverView/user-types/user-types.component';
import { WhatsTopSpeedComponent } from './PreReg/OverView/whats-top-speed/whats-top-speed.component';
import { SplashPageComponent } from './SplashPage/SplashPage.component';

const routes: Routes = [
  { path: '', redirectTo: 'splashPage', pathMatch: 'full' },
  { path: 'splashPage', component: SplashPageComponent, pathMatch: 'full' },
  
  { path: 'whatistopspeed', component: WhatsTopSpeedComponent },
  { path: 'topspeedhelps', component: TopSpeedHelpsComponent },
  { path: 'usertypes', component: UserTypesComponent },

  { path: 'examples', component: ExamplesComponent },
  { path: 'tutorials', component: TutorialsComponent },

  { path: 'contactUs', component: ContactUsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'aboutUs', component: AboutUsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

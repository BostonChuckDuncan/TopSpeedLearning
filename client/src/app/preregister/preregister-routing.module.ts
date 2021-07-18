import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Contacts/about-us/about-us.component';
import { ConsultingComponent } from './Contacts/consulting/consulting.component';
import { ContactUsComponent } from './Contacts/contact-us/contact-us.component';
import { SupportComponent } from './Contacts/support/support.component';
import { ExamplesComponent } from './Guides/examples/examples.component';
import { TutorialsComponent } from './Guides/tutorials/tutorials.component';
import { TopSpeedHelpsComponent } from './OverView/top-speed-helps/top-speed-helps.component';
import { UserTypesComponent } from './OverView/user-types/user-types.component';
import { WhatsTopSpeedComponent } from './OverView/whats-top-speed/whats-top-speed.component';
import { PreregisterComponent } from './preregister.component';

const routes: Routes = [
  { path: '', component: PreregisterComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'aboutUs', component: ConsultingComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'topspeedhelps', component: TopSpeedHelpsComponent },
  { path: 'usertypes', component: UserTypesComponent },
  { path: 'whatistopspeed', component: WhatsTopSpeedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreregisterRoutingModule { }

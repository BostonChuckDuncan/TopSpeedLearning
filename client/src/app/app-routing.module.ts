import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashPageComponent } from './SplashPage/SplashPage.component';

const routes: Routes = [
  { path: '', redirectTo: 'splashPage', pathMatch: 'full' },
  { path: 'splashPage', component: SplashPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

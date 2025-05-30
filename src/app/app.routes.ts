import { Routes } from '@angular/router';
import { AhoyPageComponent } from './ahoy-page/ahoy-page.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
  { path: '', component: AhoyPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'thanks', component: ThanksPageComponent },
];

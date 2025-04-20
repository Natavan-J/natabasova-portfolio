import { Routes } from '@angular/router';
import { AhoyPageComponent } from './ahoy-page/ahoy-page.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';

export const routes: Routes = [
  { path: '', component: AhoyPageComponent },
  { path: 'thanks', component: ThanksPageComponent },
];

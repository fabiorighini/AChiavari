import { Routes } from '@angular/router';

import { AlternativeStayPageComponent } from './pages/alternative-stay-page.component';
import { ApartmentPageComponent } from './pages/apartment-page.component';
import { ContactPageComponent } from './pages/contact-page.component';
import { GalleryPageComponent } from './pages/gallery-page.component';
import { HomePageComponent } from './pages/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'appartamento', component: ApartmentPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'alloggio-alternativo', component: AlternativeStayPageComponent },
  { path: 'contatti', component: ContactPageComponent },
  { path: '**', redirectTo: '' }
];

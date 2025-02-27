import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RequetesComponent } from './requetes/requetes.component';
import { FrontComponent } from './FRONTEND/front/front.component';
import { ContactComponent } from './FRONTEND/pages/contact/contact.component';
import { TrackingComponent } from './FRONTEND/pages/tracking/tracking.component';
import { TrackingAdminComponent } from './FRONTEND/pages/tracking-admin/tracking-admin.component';

export const routes: Routes = [

       { path: '', component: FrontComponent },
       { path: 'contact', component: ContactComponent },
       { path: 'tracking', component: TrackingComponent },
       { path: 'tracking2', component: TrackingAdminComponent }
];

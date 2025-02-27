import { Component } from '@angular/core';
import { TrackingComponent } from "../tracking/tracking.component";

@Component( {
       selector: 'app-tracking-admin',
       imports: [ TrackingComponent ],
       templateUrl: './tracking-admin.component.html',
       styleUrl: './tracking-admin.component.css'
} )
export class TrackingAdminComponent
{

}

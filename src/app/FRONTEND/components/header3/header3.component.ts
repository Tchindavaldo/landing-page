import { Component, Input } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { RouterLink } from '@angular/router';

@Component( {
       selector: 'app-header3',
       imports: [ NavBarComponent, RouterLink ],
       templateUrl: './header3.component.html',
       styleUrl: './header3.component.css'
} )
export class Header3Component
{
       @Input() breadcrumbTitle: string = 'Contact'; // Valeur par défaut
       @Input() homeLink: string = '';
       @Input() homeTitle: string = 'Maison';
       @Input() currentPageTitle: string = 'Contact';
}

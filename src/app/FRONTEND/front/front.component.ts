import { Component } from '@angular/core';
import { HomeComponent } from "../components/home/home.component";
import { CollabComponent } from "../components/collab/collab.component";
import { AboutComponent } from "../components/about/about.component";
import { ServiceComponent } from "../components/service/service.component";
import { StatComponent } from "../components/stat/stat.component";
import { StatNExtComponentComponent } from "../components/stat-next-component/stat-next-component.component";
import { SolutionComponent } from "../components/solution/solution.component";
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";

@Component( {
       selector: 'app-front',
       imports: [ HomeComponent, CollabComponent, AboutComponent, ServiceComponent, StatComponent, StatNExtComponentComponent, SolutionComponent, NavBarComponent ],
       templateUrl: './front.component.html',
       styleUrl: './front.component.css'
} )
export class FrontComponent
{

}

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { tns } from 'tiny-slider';
declare var $: any; // jQuery est chargé globalement via CDN

@Component( {
       selector: 'app-collab',
       imports: [ CommonModule ],
       templateUrl: './collab.component.html',
       styleUrls: [ './collab.component.css' ]
} )
export class CollabComponent implements AfterViewInit
{

       constructor () { }

       ngAfterViewInit(): void
       {
              this.initCarousel();
       }

       initCarousel(): void
       {
              // On définit une fonction utilitaire pour sélectionner via l'attribut data-js
              $.js = function ( el: string )
              {
                     return $( '[data-js="' + el + '"]' );
              };

              // Initialisation de Slick Carousel sur l'élément identifié par data-js="timeline-carousel"
              $.js( 'timeline-carousel' ).slick( {
                     infinite: true,
                     arrows: true,
                     // (Suppression du double "arrows: true")
                     dots: true,
                     autoplay: true,
                     speed: 800,
                     slidesToShow: 3,
                     slidesToScroll: 1,
                     responsive: [
                            {
                                   breakpoint: 800,
                                   settings: {
                                          slidesToShow: 1,
                                          slidesToScroll: 1
                                   }
                            }
                     ]
              } );
       }
}
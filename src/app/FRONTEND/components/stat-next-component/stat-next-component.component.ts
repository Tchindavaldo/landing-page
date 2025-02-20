import { AfterViewInit, Component } from '@angular/core';
declare var $: any; // jQuery est chargé globalement via CDN

@Component( {
       selector: 'app-stat-next-component',
       imports: [],
       templateUrl: './stat-next-component.component.html',
       styleUrl: './stat-next-component.component.css'
} )
export class StatNExtComponentComponent implements AfterViewInit
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
              $.js( 'timeline-carousel-stat' ).slick( {
                     infinite: true,
                     arrows: true,
                     // (Suppression du double "arrows: true")
                     dots: false,
                     autoplay: false,
                     speed: 400,
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
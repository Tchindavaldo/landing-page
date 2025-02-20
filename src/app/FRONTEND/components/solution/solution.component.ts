import { AfterViewInit, Component } from '@angular/core';
declare var $: any; // jQuery est chargé globalement via CDN

@Component( {
       selector: 'app-solution',
       imports: [],
       templateUrl: './solution.component.html',
       styleUrl: './solution.component.css'
} )
export class SolutionComponent implements AfterViewInit
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
              $.js( 'timeline-carousel-testimonial' ).slick( {
                     infinite: true,
                     arrows: true,
                     // (Suppression du double "arrows: true")
                     dots: false,
                     autoplay: true,
                     speed: 500,
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
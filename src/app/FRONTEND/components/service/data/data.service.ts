import { Injectable } from '@angular/core';

@Injectable( {
       providedIn: 'root'
} )
export class DataService
{

       constructor () { }


       existingData: any[] = []; // Variable pour stocker les données récupérées de Firestore


}

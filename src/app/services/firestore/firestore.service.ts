import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore'; // Importation d'Angular Fire
import { Observable } from 'rxjs';

@Injectable( {
       providedIn: 'root'
} )
export class FirestoreService
{

       constructor ( private firestore: Firestore ) { } // Utilisation de l'injection via le constructeur

       // Ajouter un document
       addData( collectionName: string, data: any )
       {
              const colRef = collection( this.firestore, collectionName );
              return addDoc( colRef, data );
       }

       // Lire les données
       getData( collectionName: string ): Observable<any[]>
       {
              const colRef = collection( this.firestore, collectionName );
              console.log( 'col ref', colRef );

              return collectionData( colRef, { idField: 'id' } ) as Observable<any[]>;
       }

       // Mettre à jour un document
       updateData( collectionName: string, docId: string, data: any )
       {
              const docRef = doc( this.firestore, `${ collectionName }/${ docId }` );
              return updateDoc( docRef, data );
       }

       // Supprimer un document
       deleteData( collectionName: string, docId: string )
       {
              const docRef = doc( this.firestore, `${ collectionName }/${ docId }` );
              return deleteDoc( docRef );
       }
}

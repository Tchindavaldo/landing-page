import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { FirestoreService } from './services/firestore/firestore.service';

const firebaseConfig = {
       apiKey: "AIzaSyBG1FpxychUdgE75Z59Qm6FkO0vjCAuCZM",
       authDomain: "learnings-6f4ce.firebaseapp.com",
       databaseURL: "https://learnings-6f4ce-default-rtdb.firebaseio.com",
       projectId: "learnings-6f4ce",
       storageBucket: "learnings-6f4ce.appspot.com",
       messagingSenderId: "521332523789",
       appId: "1:521332523789:web:3876651ad24516057a2644"
};


export const appConfig: ApplicationConfig = {
       providers: [

              provideZoneChangeDetection( { eventCoalescing: true } ),
              provideRouter( routes ),

              provideFirebaseApp( () => initializeApp( firebaseConfig ) ),
              provideFirestore( () => getFirestore() ),
              provideAuth( () => getAuth() ),
              provideStorage( () => getStorage() ),


              FirestoreService


       ]
};

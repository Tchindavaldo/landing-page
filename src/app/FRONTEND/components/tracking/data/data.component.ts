import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { FirestoreService } from '../../../../services/firestore/firestore.service';
import { DataService } from '../../service/data/data.service';
import { CommonModule } from '@angular/common';

@Component( {
       selector: 'app-data',
       imports: [ CommonModule ],
       templateUrl: './data.component.html',
       styleUrl: './data.component.css',
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ], // Ajoute cette ligne

} )
export class DataComponent implements OnInit
{

       @Input() isAdmin = false
       isErrorMat = false
       isErrorAdd = false
       isAdded = false
       isAdding = false
       formData: any; // Variable pour stocker les données du formulaire
       @Input() idget = ''
       existingItem = false

       constructor ( private firestoreService: FirestoreService, private data: DataService ) { }

       ngOnInit()
       {
              // Récupérer les données au chargement du composant
              this.getData();

              // this.existingItem = this.data.existingData.find( ( item ) => item.id === this.idget );
              const foundItem = this.data.existingData.find( ( item ) => item.id === this.idget );

              if ( foundItem )
              {
                     this.existingItem = true;
                     console.log( 'found item', foundItem );

                     // Attendre que le DOM soit prêt avant de remplir le formulaire
                     setTimeout( () =>
                     {
                            this.fillForm( foundItem );
                            this.setInputsReadonly();
                     }, 500 ); // Attente de 500ms pour s'assurer que le DOM est prêt
              }
       }

       saveData()
       {

              this.isAdding = true
              // Récupérer les données du formulaire
              this.formData = {
                     id: this.idget, // Remplacez par la logique pour récupérer l'ID
                     shipperInfo: {
                            name: ( document.getElementById( 'nom' ) as HTMLInputElement )?.value || '',
                            address: ( document.getElementById( 'adresse' ) as HTMLInputElement )?.value || '',
                            postal: ( document.getElementById( 'postal' ) as HTMLInputElement )?.value || '',
                            email: ( document.getElementById( 'email' ) as HTMLInputElement )?.value || ''
                     },
                     receiverInfo: {
                            name: ( document.getElementById( 'receiverName' ) as HTMLInputElement )?.value || '',
                            address: ( document.getElementById( 'receiverAddress' ) as HTMLInputElement )?.value || '',
                            phone: ( document.getElementById( 'receiverPhone' ) as HTMLInputElement )?.value || '',
                            email: ( document.getElementById( 'receiverEmail' ) as HTMLInputElement )?.value || ''
                     },
                     shipmentInfo: {
                            origin: ( document.getElementById( 'origin' ) as HTMLInputElement )?.value || '',
                            packageCount: ( document.getElementById( 'packageCount' ) as HTMLInputElement )?.value || '',
                            status: ( document.getElementById( 'status' ) as HTMLInputElement )?.value || '',
                            destination: ( document.getElementById( 'destination' ) as HTMLInputElement )?.value || '',
                            carrier: ( document.getElementById( 'carrier' ) as HTMLInputElement )?.value || '',
                            shipmentType: ( document.getElementById( 'shipmentType' ) as HTMLInputElement )?.value || '',
                            weight: ( document.getElementById( 'weight' ) as HTMLInputElement )?.value || '',
                            shipmentMode: ( document.getElementById( 'shipmentMode' ) as HTMLInputElement )?.value || '',
                            carrierReference: ( document.getElementById( 'carrierReference' ) as HTMLInputElement )?.value || '',
                            product: ( document.getElementById( 'product' ) as HTMLInputElement )?.value || '',
                            quantity: ( document.getElementById( 'quantity' ) as HTMLInputElement )?.value || '',
                            paymentMode: ( document.getElementById( 'paymentMode' ) as HTMLInputElement )?.value || '',
                            totalFreight: ( document.getElementById( 'totalFreight' ) as HTMLInputElement )?.value || '',
                            deliveryDate: ( document.getElementById( 'deliveryDate' ) as HTMLInputElement )?.value || '',
                            departureTime: ( document.getElementById( 'departureTime' ) as HTMLInputElement )?.value || '',
                            pickupDate: ( document.getElementById( 'pickupDate' ) as HTMLInputElement )?.value || '',
                            pickupTime: ( document.getElementById( 'pickupTime' ) as HTMLInputElement )?.value || '',
                            comments: ( document.getElementById( 'comments' ) as HTMLInputElement )?.value || ''
                     },
                     packageDetails: {
                            volumetricWeight: ( document.getElementById( 'volumetricWeight' ) as HTMLInputElement )?.value || '',
                            totalVolume: ( document.getElementById( 'totalVolume' ) as HTMLInputElement )?.value || '',
                            actualWeight: ( document.getElementById( 'actualWeight' ) as HTMLInputElement )?.value || ''
                     },
                     packageItems: {
                            quantity: ( document.getElementById( 'packageQuantity' ) as HTMLInputElement )?.value || '',
                            pieceType: ( document.getElementById( 'pieceType' ) as HTMLInputElement )?.value || '',
                            description: ( document.getElementById( 'pieceDescription' ) as HTMLInputElement )?.value || '',
                            length: ( document.getElementById( 'pieceLength' ) as HTMLInputElement )?.value || '',
                            width: ( document.getElementById( 'pieceWidth' ) as HTMLInputElement )?.value || '',
                            height: ( document.getElementById( 'pieceHeight' ) as HTMLInputElement )?.value || '',
                            weight: ( document.getElementById( 'pieceWeight' ) as HTMLInputElement )?.value || ''
                     },
                     shipmentHistory: {
                            date: ( document.getElementById( 'historyDate' ) as HTMLInputElement )?.value || '',
                            time: ( document.getElementById( 'historyTime' ) as HTMLInputElement )?.value || '',
                            location: ( document.getElementById( 'historyLocation' ) as HTMLInputElement )?.value || '',
                            status: ( document.getElementById( 'historyStatus' ) as HTMLInputElement )?.value || '',
                            updatedBy: ( document.getElementById( 'historyUpdatedBy' ) as HTMLInputElement )?.value || '',
                            remarks: ( document.getElementById( 'historyRemarks' ) as HTMLInputElement )?.value || ''
                     }
              };


              const existingItem2 = this.data.existingData.find( ( item ) => item.id === this.idget );

              console.log( 'id gettttttt', this.idget );

              // Vérifier si l'ID existe déjà
              if ( existingItem2 )
              {
                     this.isErrorMat = true
                     this.isAdding = false
                     console.log( 'Cet ID existe déjà !' );

                     setTimeout( () =>
                     {

                            this.isErrorMat = false
                     }, 1000 );
                     return;
              }



              // Ajouter les nouvelles données à Firestore
              this.firestoreService.addData( 'data', this.formData )
                     .then( () =>
                     {
                            console.log( 'Données enregistrées avec succès !' );

                            this.isAdding = false
                            this.isAdded = true
                            setTimeout( () =>
                            {

                                   this.isAdded = false
                            }, 1000 );
                            this.getData(); // Rafraîchir les données après l'ajout
                     } )
                     .catch( ( err ) =>
                     {

                            this.isAdding = false
                            this.isErrorAdd = true
                            console.error( 'Erreur lors de l\'enregistrement des données', err );

                            setTimeout( () =>
                            {

                                   this.isErrorAdd = false
                            }, 1000 );
                     } );
       }

       getData()
       {
              // Récupérer les données depuis Firestore
              this.firestoreService.getData( 'data' ).subscribe( ( data ) =>
              {
                     this.data.existingData = data;
                     console.log( 'Données récupérées :', this.data.existingData );
              } );
       }


       imprimerFiche(): void
       {
              const printContent = document.getElementById( 'wpcargo-result-print' );
              if ( printContent )
              {
                     const originalContent = document.body.innerHTML;
                     document.body.innerHTML = printContent.innerHTML;
                     window.print();
                     document.body.innerHTML = originalContent;
                     window.location.reload(); // Recharge la page pour éviter tout bug d'affichage après impression
              } else
              {
                     console.error( "Element 'wpcargo-result-print' non trouvé." );
              }
       }




       fillForm( data: any )
       {
              if ( !data ) return;

              // Remplissage des champs du formulaire
              ( document.getElementById( 'nom' ) as HTMLInputElement ).value = data.shipperInfo?.name || '';
              ( document.getElementById( 'adresse' ) as HTMLInputElement ).value = data.shipperInfo?.address || '';
              ( document.getElementById( 'postal' ) as HTMLInputElement ).value = data.shipperInfo?.postal || '';
              ( document.getElementById( 'email' ) as HTMLInputElement ).value = data.shipperInfo?.email || '';

              ( document.getElementById( 'receiverName' ) as HTMLInputElement ).value = data.receiverInfo?.name || '';
              ( document.getElementById( 'receiverAddress' ) as HTMLInputElement ).value = data.receiverInfo?.address || '';
              ( document.getElementById( 'receiverPhone' ) as HTMLInputElement ).value = data.receiverInfo?.phone || '';
              ( document.getElementById( 'receiverEmail' ) as HTMLInputElement ).value = data.receiverInfo?.email || '';

              ( document.getElementById( 'origin' ) as HTMLInputElement ).value = data.shipmentInfo?.origin || '';
              ( document.getElementById( 'packageCount' ) as HTMLInputElement ).value = data.shipmentInfo?.packageCount || '';
              ( document.getElementById( 'status' ) as HTMLInputElement ).value = data.shipmentInfo?.status || '';
              ( document.getElementById( 'destination' ) as HTMLInputElement ).value = data.shipmentInfo?.destination || '';
              ( document.getElementById( 'carrier' ) as HTMLInputElement ).value = data.shipmentInfo?.carrier || '';
              ( document.getElementById( 'shipmentType' ) as HTMLInputElement ).value = data.shipmentInfo?.shipmentType || '';
              ( document.getElementById( 'weight' ) as HTMLInputElement ).value = data.shipmentInfo?.weight || '';
              ( document.getElementById( 'shipmentMode' ) as HTMLInputElement ).value = data.shipmentInfo?.shipmentMode || '';
              ( document.getElementById( 'carrierReference' ) as HTMLInputElement ).value = data.shipmentInfo?.carrierReference || '';
              ( document.getElementById( 'product' ) as HTMLInputElement ).value = data.shipmentInfo?.product || '';
              ( document.getElementById( 'quantity' ) as HTMLInputElement ).value = data.shipmentInfo?.quantity || '';
              ( document.getElementById( 'paymentMode' ) as HTMLInputElement ).value = data.shipmentInfo?.paymentMode || '';
              ( document.getElementById( 'totalFreight' ) as HTMLInputElement ).value = data.shipmentInfo?.totalFreight || '';
              ( document.getElementById( 'deliveryDate' ) as HTMLInputElement ).value = data.shipmentInfo?.deliveryDate || '';
              ( document.getElementById( 'departureTime' ) as HTMLInputElement ).value = data.shipmentInfo?.departureTime || '';
              ( document.getElementById( 'pickupDate' ) as HTMLInputElement ).value = data.shipmentInfo?.pickupDate || '';
              ( document.getElementById( 'pickupTime' ) as HTMLInputElement ).value = data.shipmentInfo?.pickupTime || '';
              ( document.getElementById( 'comments' ) as HTMLInputElement ).value = data.shipmentInfo?.comments || '';

              ( document.getElementById( 'volumetricWeight' ) as HTMLInputElement ).value = data.packageDetails?.volumetricWeight || '';
              ( document.getElementById( 'totalVolume' ) as HTMLInputElement ).value = data.packageDetails?.totalVolume || '';
              ( document.getElementById( 'actualWeight' ) as HTMLInputElement ).value = data.packageDetails?.actualWeight || '';

              ( document.getElementById( 'packageQuantity' ) as HTMLInputElement ).value = data.packageItems?.quantity || '';
              ( document.getElementById( 'pieceType' ) as HTMLInputElement ).value = data.packageItems?.pieceType || '';
              ( document.getElementById( 'pieceDescription' ) as HTMLInputElement ).value = data.packageItems?.description || '';
              ( document.getElementById( 'pieceLength' ) as HTMLInputElement ).value = data.packageItems?.length || '';
              ( document.getElementById( 'pieceWidth' ) as HTMLInputElement ).value = data.packageItems?.width || '';
              ( document.getElementById( 'pieceHeight' ) as HTMLInputElement ).value = data.packageItems?.height || '';
              ( document.getElementById( 'pieceWeight' ) as HTMLInputElement ).value = data.packageItems?.weight || '';

              ( document.getElementById( 'historyDate' ) as HTMLInputElement ).value = data.shipmentHistory?.date || '';
              ( document.getElementById( 'historyTime' ) as HTMLInputElement ).value = data.shipmentHistory?.time || '';
              ( document.getElementById( 'historyLocation' ) as HTMLInputElement ).value = data.shipmentHistory?.location || '';
              ( document.getElementById( 'historyStatus' ) as HTMLInputElement ).value = data.shipmentHistory?.status || '';
              ( document.getElementById( 'historyUpdatedBy' ) as HTMLInputElement ).value = data.shipmentHistory?.updatedBy || '';
              ( document.getElementById( 'historyRemarks' ) as HTMLInputElement ).value = data.shipmentHistory?.remarks || '';
       }

       setInputsReadonly()
       {
              const inputIds = [
                     'nom', 'adresse', 'postal', 'email',
                     'receiverName', 'receiverAddress', 'receiverPhone', 'receiverEmail',
                     'origin', 'packageCount', 'status', 'destination', 'carrier', 'shipmentType',
                     'weight', 'shipmentMode', 'carrierReference', 'product', 'quantity', 'paymentMode',
                     'totalFreight', 'deliveryDate', 'departureTime', 'pickupDate', 'pickupTime', 'comments',
                     'volumetricWeight', 'totalVolume', 'actualWeight',
                     'packageQuantity', 'pieceType', 'pieceDescription', 'pieceLength', 'pieceWidth',
                     'pieceHeight', 'pieceWeight',
                     'historyDate', 'historyTime', 'historyLocation', 'historyStatus', 'historyUpdatedBy', 'historyRemarks'
              ];

              inputIds.forEach( id =>
              {
                     const inputElement = document.getElementById( id ) as HTMLInputElement;
                     if ( inputElement )
                     {
                            inputElement.readOnly = true;
                            inputElement.style.border = "none";  // Supprime la bordure
                            inputElement.style.outline = "none"; // Supprime le contour bleu lors du focus
                            inputElement.style.backgroundColor = "transparent"; // Facultatif : rendre l'arrière-plan transparent
                     }
              } );
       }

}

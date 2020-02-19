import { Injectable } from '@angular/core';

//importo la libreria para usar la api de facebook
import * as Facebook from 'fb-sdk-wrapper';


/*
  Facebook parece tener recelo con google asi que solo provee skd para el framework the react,
  la libreria que encontre, realizada por terceros, parece que ha adaptado el sdk para javascript vanilla
  para ser usado en angular.
  PD: debido a esto todo el codigo del prototipo realizado en php y javascript vanilla debio ser desechado
*/

@Injectable({
  providedIn: 'root'
})
export class FacebookServiceService {

  

  constructor() { 
    //inicializo la app
    Facebook.load()
    .then(() => {
      Facebook.init({
        appId: 2309239552738947
      });
    });
  }


  ngOnInit(){
   
  }


  //obtengo el permiso para ver poder obtener y manejar paginas
  async getClientAcsTokenManagePagesPublishPages(){
    // Login + get authorisation for additional scopes
    let valor

    return valor  = Facebook.login({
      scope: "manage_pages, publish_pages",
      return_scopes: true
    })
    .then( (response) => {
      if (response.status === 'connected') {
        // logged in
        //console.log(response)
        return response;//el servicio debe retornar
      } else {
        // not logged in
        return 'error';
      }
    });

    //return {cosa :"cosa"};
  }


  //obtengo las paginas del cliente
  getClientPages(clientAccessToken){
    let valor

    return valor = Facebook.api('/me/accounts',
    'get',
    {access_token: clientAccessToken })
    .then((response) => {
      // data's here!
      return response;
    });

  }


}

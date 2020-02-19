import { Component, OnInit } from '@angular/core';


//servicio de facebook
import {FacebookServiceService  } from "../../services/socialS/facebook-service.service";


//https://github.com/erikhagreis/fb-sdk-wrapper#readme


@Component({
  selector: 'app-intelitur-face',
  templateUrl: './intelitur-face.component.html',
  styleUrls: ['./intelitur-face.component.css']
})
export class InteliturFaceComponent implements OnInit {

  constructor(private fbService: FacebookServiceService) { 
    
  }

  ngOnInit(): void {

  }


  //variables para ocultar/mostrar componentes
 
  CreatePisOn=true;
  ListPostisOn=false;
  hideAllComp(){
    this.CreatePisOn=false;
    this.ListPostisOn=false;
  }
  showCreatePost(){
    this.CreatePisOn=true;
  }
  showListPost(){
    this.ListPostisOn=true;
  }
  


  //PRUEBAS FACEBOOK API ANGULAR-----------------------
  hacerAlgo(){
  
 
    this.fbService.getClientAcsTokenManagePagesPublishPages()
    .then(//dependiendo de la consulta al servicio debo usar subscribe o then, depende de la promesa
      res => {
        console.log('estoy por aqui')
        console.log(res)


        this.clientPages(res.authResponse.accessToken)

      }

    )
    /*
    .subscribe(
      res => console.log(res)
    )
    */
  }


  clientPages(accesToken){
    console.log(accesToken)

    this.fbService.getClientPages(accesToken)
    .then(
      res => console.log(res)
    )


    

  }

  

}

import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-ifcreate-post',
  templateUrl: './ifcreate-post.component.html',
  styleUrls: ['./ifcreate-post.component.css']

})
export class IFcreatePostComponent implements OnInit {

  text //contiene el texto de la publicacion
  imagen //imagen subida por el usuario


  constructor() { }

  ngOnInit(): void {
  }

  show_image(src, width, height, alt) {
    var img = document.createElement("img");
    console.log(this.imagen)
    img.src = this.imagen;
    img.width = width;
    img.height = height;
    img.alt = alt;
  
    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
  }

  //agrega el emoji seleccionado al textarea
  addEmoji(event){
    //console.log(event.emoji.native)
    this.text=this.text + event.emoji.native;
  }
  makePostSchema() {
    
    console.log("text")
    console.log(this.text)
  } 
}

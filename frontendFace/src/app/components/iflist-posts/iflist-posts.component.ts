import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iflist-posts',
  templateUrl: './iflist-posts.component.html',
  styleUrls: ['./iflist-posts.component.css']
})
export class IFlistPostsComponent implements OnInit {


  //para cambiar el mostrar las tablas
  showPostBoolean = false;
  showPendingPostBoolean = true;


  constructor() { }

  ngOnInit(): void {
  }


  changeDivDysplayDonePost(){
    this.showPostBoolean = false;
    this.showPendingPostBoolean = true;
  }

  
  changeDivDysplayPendingPost(){
    this.showPostBoolean = true;
    this.showPendingPostBoolean = false;
  }


}

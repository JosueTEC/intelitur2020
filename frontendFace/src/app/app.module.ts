import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//mis componentes
import { InteliturFaceComponent } from './components/intelitur-face/intelitur-face.component';

import { IFcreatePostComponent } from './components/ifcreate-post/ifcreate-post.component';
import { IFlistPostsComponent } from './components/iflist-posts/iflist-posts.component';
import { IFcheckPostComponent } from './components/ifcheck-post/ifcheck-post.component';
import { IfselectPagesComponent } from './components/ifselect-pages/ifselect-pages.component';


import { FormsModule } from "@angular/forms";

//importo el modulo del emoji piker
import { PickerModule } from '@ctrl/ngx-emoji-mart';




@NgModule({
  declarations: [
    AppComponent,
    InteliturFaceComponent,
    IFcreatePostComponent,
    IFlistPostsComponent,
    IFcheckPostComponent,
    IfselectPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

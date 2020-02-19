import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteliturFaceComponent } from './components/intelitur-face/intelitur-face.component';

import { IFcreatePostComponent } from './components/ifcreate-post/ifcreate-post.component';
import { IFlistPostsComponent } from './components/iflist-posts/iflist-posts.component';
import { IFcheckPostComponent } from './components/ifcheck-post/ifcheck-post.component';

//importo el modulo del emoji piker
import { PickerModule } from '@ctrl/ngx-emoji-mart';



@NgModule({
  declarations: [
    AppComponent,
    InteliturFaceComponent,
    IFcreatePostComponent,
    IFlistPostsComponent,
    IFcheckPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

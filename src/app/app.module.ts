import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SessionService } from "./session.service";
//added to compress, needed to display elements in component html
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostLitComponent } from './post-lit/post-lit.component';
import { SignupComponent } from './signup/signup.component';
import { LitListComponent } from './lit-list/lit-list.component';
import { LitDetailComponent } from './lit-detail/lit-detail.component';
import { LitCommentComponent } from './lit-comment/lit-comment.component';
import { LitCommentPostComponent } from './lit-comment-post/lit-comment-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostLitComponent,
    SignupComponent,
    LitListComponent,
    LitDetailComponent,
    LitCommentComponent,
    LitCommentPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ SessionService ],  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
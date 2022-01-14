import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './pages/first/first.component'; 
import { SecondComponent } from './pages/second/second.component'; 
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ChildAComponent } from './pages/child-a/child-a.component'; 
import { ChildBComponent } from './pages/child-b/child-b.component'; 
import { NameEditorComponent } from './pages/name-editor/name-editor.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './pages/profile-editor/profile-editor.component'; 
import { ListComponent } from './pages/list/list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    ChildAComponent,
    ChildBComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

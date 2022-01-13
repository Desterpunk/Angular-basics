import { ListComponent } from './pages/list/list.component' 
import { ProfileEditorComponent } from './pages/profile-editor/profile-editor.component' 
import { NameEditorComponent } from './pages/name-editor/name-editor.component' 
import { ChildBComponent } from './pages/child-b/child-b.component' 
import { ChildAComponent } from './pages/child-a/child-a.component' 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component' 
import { SecondComponent } from './pages/second/second.component' 
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component' 

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ],
  },
  { path: 'second-component', component: SecondComponent },
  { path: 'name-editor', component: NameEditorComponent },
  { path: 'profile-editor', component: ProfileEditorComponent },
  { path: 'list', component: ListComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { TodosComponent } from './pages/todos/todos.component';
import { PostagensComponent } from './pages/postagens/postagens.component';
import { AlbunsComponent } from './pages/albuns/albuns.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: InicioComponent
},
{
  path: "albuns",
  component: AlbunsComponent
},
{
  path: "postagens",
  component: PostagensComponent
},
{
  path: "todos",
  component: TodosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

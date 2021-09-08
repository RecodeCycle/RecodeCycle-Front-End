import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { MenuComponent } from './menu/menu.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';



const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },

  { path: 'menu', component: MenuComponent },
  { path: 'menu-inicial', component: MenuInicialComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'categoria', component: CategoriaComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

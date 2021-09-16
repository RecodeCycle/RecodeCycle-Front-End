import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { EquipeComponent } from './equipe/equipe.component';

import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './edit/postagem-delete/postagem-delete.component';



import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './edit/categoria-delete/categoria-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { AlertasComponent } from './alertas/alertas.component';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuInicialComponent,
    RodapeComponent,
    SobreNosComponent,

    RodapeComponent,

    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    CategoriaComponent,
    HomeComponent,
    EquipeComponent,

    PostagemEditComponent,
    PostagemDeleteComponent,
   


    CategoriaEditComponent,
    UsuarioEditComponent,
    AlertasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

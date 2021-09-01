import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { RodapeComponent } from './rodape/rodape.component';

import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

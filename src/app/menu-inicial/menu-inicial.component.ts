import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css']
})
export class MenuInicialComponent implements OnInit {

  nome = environment.nome
  foto = environment.fotoPerfil
  id = environment.id

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sair() {
    this.router.navigate(["/home"])
    environment.token = ""
    environment.nome = ""
    environment.fotoPerfil = ""
    environment.id = 0
  }

}
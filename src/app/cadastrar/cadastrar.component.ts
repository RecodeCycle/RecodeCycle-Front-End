import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  confirmarSenha: string;
  adminUsuario: string;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoAdmin(event: any){
    this.adminUsuario = event.target.value
  }

  cadastrar(){
    this.usuario.admin = this.adminUsuario
    if(this.usuario.senha != this.confirmarSenha){
      alert('As senhas estão diferentes.')
    } else {
      console.log(this.usuario)
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert('Usuário criado com sucesso!')
      })
    }
  }
}
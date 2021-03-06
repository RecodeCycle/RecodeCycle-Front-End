import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
})
export class UsuarioEditComponent implements OnInit {
  usuario: Usuario = new Usuario();
  idUsuario: number;
  confirmarSenha: string;
  tipoUser: string;

  foto = environment.fotoPerfil

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    this.idUsuario = this.route.snapshot.params['id'];
    this.findByIdUser(this.idUsuario);
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoAdmin(event: any) {
    this.tipoAdmin = event.target.value;
  }

  atualizar() {
    this.usuario.admin = this.tipoUser;
    if (this.usuario.senha != this.confirmarSenha) {
      this.alertas.showAlertDanger('As senhas estão diferentes.');
    } else {
      console.log(this.usuario);
      this.authService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/inicio']);
        this.alertas.showAlertInfo('Usuário atualizado com sucesso, faça o login novamente.');
        environment.token = '';
        environment.nome = '';
        environment.fotoPerfil = '';
        environment.id = 0;
        this.router.navigate(['/entrar']);
      });
    }
  }

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }
}

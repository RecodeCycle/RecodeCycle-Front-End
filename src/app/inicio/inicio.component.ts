import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  tituloPostagem: string;

  categoria: Categoria = new Categoria();
  listaCategorias: Categoria[];
  idCategoria: number;
  nomeCategoria: string;

  user: Usuario = new Usuario();
  idUser = environment.id;

  key : 'data'
  reverse = true

  foto = environment.fotoPerfil
  nome = environment.nome
  id = environment.id
  
  idPostagem: Postagem;

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private categoriaService: CategoriaService,
    private authService: AuthService,
    private alertas: AlertasService

  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    this.getAllCategorias();
    this.getAllPostagens();
  }

  sair() {
    this.router.navigate(["/home"])
    environment.token = ""
    environment.nome = ""
    environment.fotoPerfil = ""
    environment.id = 0
  }

  getAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp;
    });
  }

  findByIdCategoria() {
    this.categoriaService
      .getByIdCategoria(this.idCategoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
      });
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp;
    });
  }

  publicar() {
    this.categoria.id = this.idCategoria;
    this.postagem.categoria = this.categoria;

    this.user.id = this.idUser;
    this.postagem.usuario = this.user;

    this.postagemService
      .postPostagem(this.postagem)
      .subscribe((resp: Postagem) => {
        this.postagem = resp;
        this.alertas.showAlertSuccess('Postagem realizada com sucesso!');
        this.postagem = new Postagem();
        this.getAllPostagens();
      });
  }

  
  findByTituloPostagem(){

    if(this.tituloPostagem == ''){
      this.getAllPostagens()
    } else {

      this.postagemService.getByTituloPostagem(this.tituloPostagem).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  findByNomeCategoria(){
    if(this.nomeCategoria == ''){
      this.getAllCategorias()
    } else {

      this.categoriaService.getByNomeCategoria(this.nomeCategoria).subscribe((resp: Categoria[]) => {
        this.listaCategorias = resp
      })
    }

  }

  getPostagemByid(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) =>{
    this.idPostagem = resp
    })
  }

  curtida(id: number){
    this.postagemService.putCurtir(id).subscribe(() => {
      this.getAllPostagens()
    })

  }

  descurtida(id: number){
   this.postagemService.putDescurtir(id).subscribe(() => {
     this.getAllPostagens()
   })
  }
}

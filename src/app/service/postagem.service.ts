import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://recodecycle.herokuapp.com/postagens', this.token)
  }

  postPostagem(postagem: Postagem) : Observable<Postagem>{
    return this.http.post<Postagem>('https://recodecycle.herokuapp.com/postagens', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://recodecycle.herokuapp.com/postagens', postagem, this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://recodecycle.herokuapp.com/postagens/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://recodecycle.herokuapp.com/postagens/titulo/${titulo}`, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://recodecycle.herokuapp.com/postagens/${id}`, this.token)
  }

  putCurtir(id: number): Observable<Postagem>{
    return this.http.put<Postagem>(`https://recodecycle.herokuapp.com/postagens/curtir/${id}`, this.token)

  }

  putDescurtir(id: number): Observable<Postagem>{
    return this.http.put<Postagem>(`https://recodecycle.herokuapp.com/postagens/descurtir/${id}`, this.token)

  }
}

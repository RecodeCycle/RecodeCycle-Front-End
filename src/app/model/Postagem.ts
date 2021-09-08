import { Categoria } from './Categoria';
import { Usuario } from './Usuario';

export class Postagem {
  public id: number;
  public titulo: string;
  public texto: string;
  public regioes: string;
  public residuos: string;
  public informativos: string;
  public curtidas: string;
  public categoria: Categoria;
  public usuario: Usuario;
}

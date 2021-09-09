  
import { Postagem } from "./Postagem"

export class Categoria {
    public id: number
    public qtdCategoria: number
    public descricao: string
    public postagem: Postagem[]
}
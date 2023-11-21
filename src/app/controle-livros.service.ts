import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'It - A Coisa',
      resumo:
        'Um grupo de sete adolescentes de Derry, uma cidade no Maine, formam o auto-intitulado "Losers Club" - o clube dos perdedores. A pacata rotina da cidade é abalada quando crianças começam a desaparecer e tudo o que pode ser encontrado delas são partes de seus corpos. Logo, os integrantes do "Losers Club" acabam ficando face a face com o responsável pelos crimes: o palhaço Pennywise.',
      autores: ['Stephen King'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'O Hobbit',
      resumo:
        'Como a maioria dos hobbits, Bilbo Bolseiro leva uma vida tranquila até o dia em que recebe uma missão do mago Gandalf. Acompanhado por um grupo de anões, ele parte numa jornada até a Montanha Solitária para libertar o Reino de Erebor do dragão Smaug.',
      autores: ['J. R. R. Tolkien'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Divergente',
      resumo:
        'Divergente acompanha a adolescente Beatrice (Shailene Woodley) na futurística Chicago. Ao completar 16 anos, a jovem terá que escolher entre as diferentes facções em que a cidade está dividida. Elas são cinco e cada uma representa um valor diferente, como honestidade, generosidade e coragem.',
      autores: ['Veronica Roth'],
    },
  ];
  //
  constructor() {}

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

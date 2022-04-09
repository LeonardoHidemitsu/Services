import { Time } from '@angular/common';
import { Injectable } from '@angular/core';

interface Disciplina {
  materia: string;
}

@Injectable()
export class DisciplinasService {
  list: Array<Disciplina> = [
    {
      materia: 'Desenvolvimento de Servidores I | Segunda-feira | 9:30 - 13:00',
    },
    {
      materia: 'Desenvolvimento para Dispostivos Móveis I | Segunda-Feira | 19:00 - 22:30',
    },
    {
      materia: 'Negócios e Marketing e Eletrônicos | Quarta-Feira | 19:00 - 22:30',
    },
    {
      materia: 'Desenvolvimento para Servidores II | Quinta-Feira | 19:00 - 22:30',
    },
    {
      materia: 'Tópicos Especiais em Sistemas para Internet II | Sexta-Feira | 19:00 - 22:30',
    },
    {
      materia: 'Projeto de Prototipagem e Testes de Usabilidade | Sábado | 8:00 - 11:30',
    },
    {
      materia: 'Projeto de Trabalho de Graduação em Sistemas para Internet | Sábado | 11:30 - 13:10',
    },
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(materia: string) {
    this.list.push({ materia,});
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}

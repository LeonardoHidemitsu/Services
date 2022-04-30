import { Injectable } from '@angular/core';

interface Disciplina {
  materia: string;
  diaDaSemana: string;
  horInicio: string;
  horFinal: string;
}

@Injectable()
export class DisciplinasService {
  list: Array<Disciplina> = [
    {
      materia: 'Desenvolvimento para Servidores I',
      diaDaSemana: 'Segunda-Feira',
      horInicio: '9:30',
      horFinal: '13:00',
    },
    {
      materia: 'Desenvolvimento para Dispostivos Móveis I',
      diaDaSemana: 'Segunda-Feira',
      horInicio: '19:00',
      horFinal: '22:30',
    },
    {
      materia: 'Negócios e Marketing e Eletrônicos',
      diaDaSemana: 'Quarta-Feira',
      horInicio: '19:00',
      horFinal: '22:30'
    },
    {
      materia: 'Desenvolvimento para Servidores II',
      diaDaSemana: 'Quinta-Feira',
      horInicio: '19:00',
      horFinal: '22:30'
    },
    {
      materia: 'Tópicos Especiais em Sistemas para Internet II',
      diaDaSemana: 'Sexta-Feira',
      horInicio: '19:00',
      horFinal: '22:30'
    },
    {
      materia: 'Projeto de Prototipagem e Testes de Usabilidade',
      diaDaSemana: 'Sábado',
      horInicio: '8:00',
      horFinal: '11:30'
    },
    {
      materia: 'Projeto de Trabalho de Graduação em Sistemas para Internet',
      diaDaSemana: 'Sábado',
      horInicio: '11:30',
      horFinal: '13:10'
    },
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(
    materia: string,
    diaDaSemana: string,
    horInicio: string,
    horFinal: string
  ) {
    this.list.push({ materia, diaDaSemana, horInicio, horFinal });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}

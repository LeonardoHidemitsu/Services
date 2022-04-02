import { Time } from '@angular/common';
import { Injectable } from '@angular/core';

interface Disciplina {
  nome: string;
  diaDaSemana: String;
  horario: string;
}

@Injectable()
export class DisciplinasService {
  list: Array<Disciplina> = [
    {
      nome: 'Desenvolvimento de Servidores I',
      diaDaSemana: 'Segunda-feira',
      horario: '9:30 - 13:00',
    },
    {
      nome: 'Desenvolvimento para Dispostivos Móveis I',
      diaDaSemana: 'Segunda-Feira',
      horario: '19:00 - 22:30',
    },
    {
      nome: 'Negócios e Marketing e Eletrônicos',
      diaDaSemana: 'Quarta-Feira',
      horario: '19:00 - 22:30',
    },
    {
      nome: 'Desenvolvimento para Servidores II',
      diaDaSemana: 'Quinta-Feira',
      horario: '19:00 - 22:30',
    },
    {
      nome: 'Tópicos Especiais em Sistemas para Internet II',
      diaDaSemana: 'Sexta-Feira',
      horario: '19:00 - 22:30',
    },
    {
      nome: 'Projeto de Prototipagem e Testes de Usabilidade',
      diaDaSemana: 'Sábado',
      horario: '8:00 - 11:30',
    },
    {
      nome: 'Projeto de Trabalho de Graduação em Sistemas para Internet',
      diaDaSemana: 'Sábado',
      horario: '11:30 - 13:10',
    },
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(nome: string, diaDaSemana: string, horario: string) {
    this.list.push({ nome, diaDaSemana, horario });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}

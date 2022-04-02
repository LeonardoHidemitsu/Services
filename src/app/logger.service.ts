import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  messages: string[] = [];

  constructor() {
    this.add('LogServices constructed');
  }

  add(message: string) {
    this.messages.push(message + ' at ' + new Date());
  }

  cleat() {
    this.messages = [];
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinasService } from './disciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'temporizador', component: TemporizadorComponent},
      { path: 'disciplinas', component: DisciplinasComponent},
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TemporizadorComponent,
    DisciplinasComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    TimerService, 
    DisciplinasService,
  ],
})
export class AppModule {}

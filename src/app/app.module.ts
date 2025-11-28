import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TarefasModule } from './tarefas';
import { CadastrarTarefaComponent } from './tarefa/cadastrar-tarefa/cadastrar-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TarefasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

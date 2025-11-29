import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  tarefa: Tarefa;
  constructor() { }

  ngOnInit(): void {
  }

}

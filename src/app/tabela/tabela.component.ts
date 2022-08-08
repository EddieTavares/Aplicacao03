import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Contato } from '../api/contato';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  public posts:Contato[] = [];
  objetoContato = new Contato;
  constructor(private servico:ApiService) { };

  ngOnInit() {
    this.selecionar();
  }
  
  selecionar() {
    this.servico.listar()
    .subscribe(posts => {this.posts = posts})
  }
  
  cadastrar() {
    this.servico.adicionar(this.objetoContato)
    .subscribe(posts => {this.posts.push(posts)})
  }
}

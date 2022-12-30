import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs';
import { JogosModel } from './model/jogo-container.model';
import { JogoContainerService } from './service/jogo-container.service';

@Component({
  selector: 'app-jogo-container',
  templateUrl: './jogo-container.component.html',
  styleUrls: ['./jogo-container.component.scss']
})
export class JogoContainerComponent implements OnInit {

  sumiu = false;
  jogoList!: JogosModel | any

  constructor(private jogoContainerService: JogoContainerService) { }

  ngOnInit() {
    this.listaDeJogos();
  }

  teste() {
    console.log('ls')
  }

  public listaDeJogos() {
    this.jogoContainerService.getJogos().pipe(
      tap(res => {
        this.jogoList = res;
      })
    ).subscribe();
  }

}

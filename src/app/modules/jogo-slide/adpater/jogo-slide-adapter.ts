import { Injectable } from '@angular/core';
import { Games } from '../jogo-slide.component';
import { JogoSlideDefault } from './jogo-slide-default';

@Injectable()
export class JogoSlideAdapter {

  nameGame = Games;
  readonly defaultJogoSlideViewContet = JogoSlideDefault.getContent(this.nameGame.DIABLO_IV);


}

import { Component, OnInit } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { ProgressBarService } from 'src/app/modules/jogo-slide/service/progress-bar.service';
import { JogoSlideDefault } from './adpater/jogo-slide-default';
import { JogosSlideModel } from './model/jogos-slide.model';

export enum Games {
  DIABLO = 'DIABLO IMORTAL',
  HEARTHSTONE = 'HEARTHSTONE',
  WAR_CRAFT = 'WAR_CRAFT',
  DIABLO_IV = 'DIABLO_IV',
  STAR_CRAFT = 'STAR_CRAFT'
}

@Component({
  selector: 'app-jogo-slide',
  templateUrl: './jogo-slide.component.html',
  styleUrls: ['./jogo-slide.component.scss']
})
export class JogoSlideComponent implements OnInit {

  nume!: Observable<number>;
  // teste1!: JogoSlideDefault;
  // name = Games;
  changeText = false;

  constructor(
    private _progressBar: ProgressBarService) { }

  ngOnInit() {
    this.nume = this._progressBar.timer();
    // this.contentSlide(this.name.DIABLO_IV);
  }

  // contentSlide(name: Games): JogosSlideModel {
  //   switch (name) {
  //     case Games.DIABLO_IV:
  //       return this.teste1 = {
  //         title: `Retorne à escuridão com o game Diablo IV`,
  //         paragraph: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
  //         buttonDiscription: 'Jogue agora',
  //         backgorundImage: 'assets/games/diablo-bg.png',
  //         listGames: [
  //           {
  //             imageGames: 'assets/icons/game-1.png',
  //             active: true,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-2.png',
  //             active: false,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-3.png',
  //             active: false,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-4.png',
  //             active: false,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-5.png',
  //             active: false,
  //           }
  //         ],
  //         containerImageGame: {
  //           logoGames: 'assets/jogo-slide/diabloIV.png',
  //           imageGames: 'assets/games/diablo-animation-cover.png',
  //           videoGames: 'assets/games/diablo-animation.gif'
  //         }

  //       };
  //     case Games.HEARTHSTONE:
  //       return this.teste1 = {
  //         title: `Novo pacote de expansão de Hearthstone`,
  //         paragraph: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
  //         buttonDiscription: 'Reserve agora na pré-venda',
  //         backgorundImage: 'assets/games/hearthstone-bg.png',
  //         listGames: [
  //           {
  //             imageGames: 'assets/icons/game-1.png',
  //             active: false,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-2.png',
  //             active: true,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-3.png',
  //             active: false,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-4.png',
  //             active: false,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-5.png',
  //             active: false,
  //           }
  //         ],
  //         containerImageGame: {
  //           logoGames: 'assets/games/hearthstone-logo.png',
  //           imageGames: 'assets/games/hearthstone-animation-cover.png',
  //           videoGames: 'assets/games/hearthstone-animation.gif'
  //         }

  //       };
  //     case Games.WAR_CRAFT:
  //       return this.teste1 = {
  //         title: `Desbrave as Terras Sombrias em Shadowlands! `,
  //         paragraph: 'O que jaz além do mundo que você conhece?',
  //         buttonDiscription: 'Reserve agora na pré-venda',
  //         backgorundImage: 'assets/games/wow-bg.png',
  //         listGames: [
  //           {
  //             imageGames: 'assets/icons/game-1.png',
  //             active: false,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-2.png',
  //             active: false,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-3.png',
  //             active: true,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-4.png',
  //             active: false,
  //           },
  //           {
  //             imageGames: 'assets/icons/game-5.png',
  //             active: false,
  //           }
  //         ],
  //         containerImageGame: {
  //           logoGames: 'assets/games/wow-logo.png',
  //           imageGames: 'assets/games/wow-animation-cover.png',
  //           videoGames: 'assets/games/wow-animation.gif'
  //         }

  //       };
  //     default:
  //       return this.teste1 = {
  //         title: `Retorne à escuridão com o game Diablo IV`,
  //         paragraph: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
  //         buttonDiscription: 'Jogue agora',
  //         backgorundImage: '',
  //         listGames: [
  //           {
  //             imageGames: 'assets/icons/game-1.png',
  //             active: false,
  //           }
  //         ],
  //         containerImageGame: {
  //           logoGames: 'assets/jogo-slide/diabloIV.png',
  //           imageGames: 'assets/games/diablo-animation-cover.png',
  //           videoGames: 'assets/games/diablo-animation.gif'
  //         }

  //       }
  //   }
  // }
}

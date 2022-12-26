import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgressBarService } from 'src/app/shared/progress-bar/service/progress-bar.service';
import { JogosSlideModel } from './model/jogos-slide.model';

export enum Test {
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

  sumiu = false;
  nume!: Observable<number>;
  teste1!: JogosSlideModel;
  name = Test.HEARTHSTONE;
  image = 'assets/games/hearthstone-bg.png'



  constructor(private _progressBar: ProgressBarService) { }

  ngOnInit() {
    this.nume = this._progressBar.teste();
    this.teste(this.name);
  }

  teste(name: Test): JogosSlideModel {
    switch (name) {
      case Test.DIABLO_IV:
        return this.teste1 = {
          title: `Retorne à escuridão com o game Diablo IV`,
          paragraph: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
          buttonDiscription: 'Jogue agora',
          listGames: [
            {
              imageGames: 'assets/icons/game-1.png',
              active: true,
            }
          ]

        };
      case Test.HEARTHSTONE:
        return this.teste1 = {
          title: `Novo pacote de expansão de Hearthstone`,
          paragraph: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
          buttonDiscription: 'Reserve agora na pré-venda',
          listGames: [
            {
              imageGames: 'assets/icons/game-2.png',
              active: false,
            }
          ]
        };
      case Test.WAR_CRAFT:
        return this.teste1 = {
          title: `Desbrave as Terras Sombrias em Shadowlands! `,
          paragraph: 'O que jaz além do mundo que você conhece?',
          buttonDiscription: 'Reserve agora na pré-venda',
          listGames: [
            {
              imageGames: 'assets/icons/game-3.png',
              active: false,
            }
          ]
        };
      case Test.DIABLO:
        return this.teste1 = {
          title: `Retorne à escuridão com o game Diablo IV`,
          paragraph: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
          buttonDiscription: 'Jogue agora',
          listGames: [
            {
              imageGames: 'assets/icons/game-1.png',
              active: false,
            }
          ]
        };
      case Test.STAR_CRAFT:
        return this.teste1 = {
          title: `Retorne à escuridão com o game Diablo IV`,
          paragraph: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
          buttonDiscription: 'Jogue agora',
          listGames: [
            {
              imageGames: 'assets/icons/game-1.png',
              active: false,
            }
          ]
        };
      default:
        return this.teste1 = {
          title: `Retorne à escuridão com o game Diablo IV`,
          paragraph: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
          buttonDiscription: 'Jogue agora',
          listGames: [
            {
              imageGames: 'assets/icons/game-1.png',
              active: false,
            }
          ]
        }
    }
  }
}

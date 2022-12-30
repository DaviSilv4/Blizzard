import { Games } from "../jogo-slide.component";
import { JogosSlideModel } from "../model/jogos-slide.model";

export class JogoSlideDefault{
  public static getContent(game: Games): JogosSlideModel{
    switch (game) {
      case Games.DIABLO_IV:
        return  {
          title: `Retorne à escuridão com o game Diablo IV`,
          paragraph: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
          buttonDiscription: 'Jogue agora',
          backgorundImage: 'assets/games/diablo-bg.png',
          listGames: [
            {
              imageGames: 'assets/icons/game-1.png',
              active: true,
            },
            {
              imageGames: 'assets/icons/game-2.png',
              active: false,
            },
            {
              imageGames: 'assets/icons/game-3.png',
              active: false,
            },
            {
              imageGames: 'assets/icons/game-4.png',
              active: false,
            },
            {
              imageGames: 'assets/icons/game-5.png',
              active: false,
            }
          ],
          containerImageGame: {
            logoGames: 'assets/jogo-slide/diabloIV.png',
            imageGames: 'assets/games/diablo-animation-cover.png',
            videoGames: 'assets/games/diablo-animation.gif'
          }

        };
      case Games.HEARTHSTONE:
        return {
          title: `Novo pacote de expansão de Hearthstone`,
          paragraph: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
          buttonDiscription: 'Reserve agora na pré-venda',
          backgorundImage: 'assets/games/hearthstone-bg.png',
          listGames: [
            {
              imageGames: 'assets/icons/game-1.png',
              active: false,
            },
            {
              imageGames: 'assets/icons/game-2.png',
              active: true,
            },
            {
              imageGames: 'assets/icons/game-3.png',
              active: false,
            },
            {
              imageGames: 'assets/icons/game-4.png',
              active: false,
            },
            {
              imageGames: 'assets/icons/game-5.png',
              active: false,
            }
          ],
          containerImageGame: {
            logoGames: 'assets/games/hearthstone-logo.png',
            imageGames: 'assets/games/hearthstone-animation-cover.png',
            videoGames: 'assets/games/hearthstone-animation.gif'
          }

        };
      case Games.WAR_CRAFT:
        return {
          title: `Desbrave as Terras Sombrias em Shadowlands! `,
          paragraph: 'O que jaz além do mundo que você conhece?',
          buttonDiscription: 'Reserve agora na pré-venda',
          backgorundImage: 'assets/games/wow-bg.png',
          listGames: [
            {
              imageGames: 'assets/icons/game-1.png',
              active: false,
            },
            {
              imageGames: 'assets/icons/game-2.png',
              active: false,
            },
            {
              imageGames: 'assets/icons/game-3.png',
              active: true,
            },
            {
              imageGames: 'assets/icons/game-4.png',
              active: false,
            },
            {
              imageGames: 'assets/icons/game-5.png',
              active: false,
            }
          ],
          containerImageGame: {
            logoGames: 'assets/games/wow-logo.png',
            imageGames: 'assets/games/wow-animation-cover.png',
            videoGames: 'assets/games/wow-animation.gif'
          }

        };
      default:
        return {
          title: `Retorne à escuridão com o game Diablo IV`,
          paragraph: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
          buttonDiscription: 'Jogue agora',
          backgorundImage: '',
          listGames: [
            {
              imageGames: 'assets/icons/game-1.png',
              active: false,
            }
          ],
          containerImageGame: {
            logoGames: 'assets/jogo-slide/diabloIV.png',
            imageGames: 'assets/games/diablo-animation-cover.png',
            videoGames: 'assets/games/diablo-animation.gif'
          }

        }
    }
  }
}

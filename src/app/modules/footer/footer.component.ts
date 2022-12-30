import { Component, OnInit } from '@angular/core';
import { FooterModel } from './model/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  content: FooterModel = {
    logo: 'assets/logo/logo-battle-net.png',
    subtitle: 'Baixe agora o battle.net',
    info: [
      {
        icon:'assets/footer/play.svg',
        description: 'Seus jogos em um só lugar'
      },
      {
        icon:'assets/footer/dots-wrapper.svg',
        description: 'Conecte-se aos seus amigos'
      },
      {
        icon:'assets/footer/buy.svg',
        description: 'Compre jogos e itens digitais'
      }
    ],
    button: {
      imageButton: 'assets/footer/windows.svg',
      buttonDescription: 'Baixar para o Windows'
    },
    mobile: {
      imageMobile: 'assets/footer/phone.svg',
      mobileDescription: `Também disponível como <a class='underline'>aplicativo móvel</a>`
    },
    image: {
      backgroundImage: 'assets/footer/app.png',
      imageContainer: 'assets/footer/app-mini.png'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

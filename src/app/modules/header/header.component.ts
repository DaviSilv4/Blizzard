import { Component, OnInit } from '@angular/core';
import { HeaderModel } from './model/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  content: HeaderModel = {
    logo: 'assets/logo/logo-blizzard.png',
    navigationMenu: {
      jogos: {
        nameNavigation: 'Jogos'
      },
      esportes: {
        nameNavigation: 'Esportes'
      },
      loja: 'Loja',
      noticias: 'Noticias',
      suporte: 'Suporte'
    },
    criarConta: {
      description: 'Criar Conta'
    },
    login: {
      description: 'Login'
    }
  }

  teste = true;

  constructor() { }

  ngOnInit() {
  }

  loginModal(abrirModal: any){
    abrirModal = !this.teste;
    console.log(abrirModal);
    debugger;
  }

}

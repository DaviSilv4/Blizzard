import { Component, Input, OnInit } from '@angular/core';

export interface ButtonSize {
  LOGIN: 'LOGIN'
  CRIAR_CONTA: 'CRIAR_CONTA'
  MD: 'MD'
  LG: 'LG'
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() sizeButton!: string;
  teste!: ButtonSize;

  constructor() { }

  ngOnInit() {
  }

  validateSize(): string{
    switch (this.sizeButton) {
      case this.teste.LOGIN:
        return this.sizeButton = 'button-login'
      case this.teste.CRIAR_CONTA:
        return this.sizeButton = 'button-criar-conta'
      case this.teste.MD:
      case 'Papayas':
        return this.sizeButton = 'button-md'
      case this.teste.LG:
        return this.sizeButton = 'button-lg'
      default:
        return this.sizeButton = 'button-sm'
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

testeClick = true;

  constructor() { }

  ngOnInit() {
  }

  testeModalClick() {
    this.testeClick = !this.testeClick;
    console.log(this.testeModalClick);
  }

}

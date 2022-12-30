import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ButtonComponent } from './button/button.component';
import { ProgressBarService } from '../modules/jogo-slide/service/progress-bar.service';
import { ModalLoginComponent } from './modal-login/modal-login.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  declarations: [
    ButtonComponent,
    ModalLoginComponent
  ],
  exports: [
    ButtonComponent,
    ModalLoginComponent
  ],
  providers: [ProgressBarService]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ButtonComponent } from './button/button.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressBarService } from './progress-bar/service/progress-bar.service';
import { ModalLoginComponent } from './modal-login/modal-login.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  declarations: [
    ButtonComponent,
    ProgressBarComponent,
    ModalLoginComponent
  ],
  exports: [
    ButtonComponent,
    ProgressBarComponent,
    ModalLoginComponent
  ],
  providers: [ProgressBarService]
})
export class SharedModule { }

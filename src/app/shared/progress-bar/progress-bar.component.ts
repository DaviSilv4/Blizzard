import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { delay, map, Observable, startWith } from 'rxjs';
import { ProgressBarService } from './service/progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {

  // @Input() inicio: string = 'inicio';
  // @Input() final: string = 'final';
  // @Input() porcetagem: number = 1;

  nume!: Observable<number>;

  constructor(private _progressBar: ProgressBarService) {
  }

  ngOnInit() {
    // this.nume = this._progressBar.teste();
    this.nume = this._progressBar.teste();

  }

}

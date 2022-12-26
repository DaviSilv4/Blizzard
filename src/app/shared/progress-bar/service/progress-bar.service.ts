import { Injectable } from '@angular/core';
import { timer, Observable, interval, Subject, of, EMPTY } from 'rxjs';
import { repeat, repeatWhen, take, takeWhile, tap } from 'rxjs/operators';

@Injectable()

export class ProgressBarService {

  private timer$!: Observable<number>;
  private deadline!: Date;
  private timeRemaining = 7;
  private readonly _stop = new Subject<void>();
  private readonly _start = new Subject<void>();

  public setTimer(seconds = 45): void {
    this.setDeadline(new Date(), seconds);
    this.timer$ = timer(0, 1000).pipe(
      tap(() => {
        this.setTimeRemaining(this.deadline);
      }),
      takeWhile(() => this.timeRemaining >= 0)
    );
  }

  private setDeadline(date: Date, seconds: number): void {
    this.deadline = new Date(date.getTime() + seconds*1000);
  }

  private setTimeRemaining(deadline: any): void {
    this.timeRemaining = Date.parse(deadline) - Date.parse(new Date() + '');
  }

  public getTimeRemaining(): number{
    return this.timeRemaining;
  }

  public getTimerObservable(): Observable<number> {
    return this.timer$;
  }

  teste(): Observable<number>{
    return timer(1000, 100) //Initial delay 1 seconds and interval countdown also 1 second
    .pipe(
      takeWhile((x) => x < 100),
      repeat(),
    );
   }
}

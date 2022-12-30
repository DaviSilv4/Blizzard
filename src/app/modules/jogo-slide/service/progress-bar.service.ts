import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { repeat,  takeWhile } from 'rxjs/operators';

@Injectable()

export class ProgressBarService {

  timer(): Observable<number>{
    return timer(1000, 100) //Initial delay 1 seconds and interval countdown also 1 second
    .pipe(
      takeWhile((x) => x < 100),
      repeat(),
    );
   }
}

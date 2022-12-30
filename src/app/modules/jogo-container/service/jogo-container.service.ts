import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { JogosModel } from '../model/jogo-container.model';

@Injectable({
  providedIn: 'root'
})
export class JogoContainerService {

  constructor(private http: HttpClient) { }

  public getJogos(): Observable<any> {
    return this.http.get('https://api.brchallenges.com/api/blizzard/games');
  }
}

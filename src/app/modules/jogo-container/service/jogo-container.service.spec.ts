/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JogoContainerService } from './jogo-container.service';

describe('Service: Jogos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogoContainerService]
    });
  });

  it('should ...', inject([JogoContainerService], (service: JogoContainerService) => {
    expect(service).toBeTruthy();
  }));
});

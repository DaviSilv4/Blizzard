/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JogoSlideComponent } from './jogo-slide.component';

describe('JogoSlideComponent', () => {
  let component: JogoSlideComponent;
  let fixture: ComponentFixture<JogoSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

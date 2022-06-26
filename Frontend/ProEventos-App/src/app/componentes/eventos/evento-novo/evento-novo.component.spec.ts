/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventoNovoComponent } from './evento-novo.component';

describe('EventoNovoComponent', () => {
  let component: EventoNovoComponent;
  let fixture: ComponentFixture<EventoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

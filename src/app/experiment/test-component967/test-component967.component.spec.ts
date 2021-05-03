import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent967Component } from './test-component967.component';

describe('TestComponent967Component', () => {
  let component: TestComponent967Component;
  let fixture: ComponentFixture<TestComponent967Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent967Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

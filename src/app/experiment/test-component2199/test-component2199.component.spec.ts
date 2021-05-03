import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2199Component } from './test-component2199.component';

describe('TestComponent2199Component', () => {
  let component: TestComponent2199Component;
  let fixture: ComponentFixture<TestComponent2199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

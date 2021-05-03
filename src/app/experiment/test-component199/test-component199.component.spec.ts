import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent199Component } from './test-component199.component';

describe('TestComponent199Component', () => {
  let component: TestComponent199Component;
  let fixture: ComponentFixture<TestComponent199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

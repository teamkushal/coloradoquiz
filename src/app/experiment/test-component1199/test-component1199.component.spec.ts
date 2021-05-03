import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1199Component } from './test-component1199.component';

describe('TestComponent1199Component', () => {
  let component: TestComponent1199Component;
  let fixture: ComponentFixture<TestComponent1199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

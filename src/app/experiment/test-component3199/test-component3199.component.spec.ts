import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3199Component } from './test-component3199.component';

describe('TestComponent3199Component', () => {
  let component: TestComponent3199Component;
  let fixture: ComponentFixture<TestComponent3199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

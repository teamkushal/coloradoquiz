import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent163Component } from './test-component163.component';

describe('TestComponent163Component', () => {
  let component: TestComponent163Component;
  let fixture: ComponentFixture<TestComponent163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent163Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

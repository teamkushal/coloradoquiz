import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent588Component } from './test-component588.component';

describe('TestComponent588Component', () => {
  let component: TestComponent588Component;
  let fixture: ComponentFixture<TestComponent588Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent588Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

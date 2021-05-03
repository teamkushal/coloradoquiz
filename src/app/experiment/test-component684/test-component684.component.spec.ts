import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent684Component } from './test-component684.component';

describe('TestComponent684Component', () => {
  let component: TestComponent684Component;
  let fixture: ComponentFixture<TestComponent684Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent684Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

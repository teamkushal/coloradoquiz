import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2291Component } from './test-component2291.component';

describe('TestComponent2291Component', () => {
  let component: TestComponent2291Component;
  let fixture: ComponentFixture<TestComponent2291Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2291Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

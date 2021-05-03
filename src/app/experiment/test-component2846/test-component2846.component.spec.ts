import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2846Component } from './test-component2846.component';

describe('TestComponent2846Component', () => {
  let component: TestComponent2846Component;
  let fixture: ComponentFixture<TestComponent2846Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2846Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

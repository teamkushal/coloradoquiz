import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2854Component } from './test-component2854.component';

describe('TestComponent2854Component', () => {
  let component: TestComponent2854Component;
  let fixture: ComponentFixture<TestComponent2854Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2854Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

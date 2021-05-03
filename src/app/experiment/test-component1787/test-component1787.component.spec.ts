import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1787Component } from './test-component1787.component';

describe('TestComponent1787Component', () => {
  let component: TestComponent1787Component;
  let fixture: ComponentFixture<TestComponent1787Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1787Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

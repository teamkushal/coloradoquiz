import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2541Component } from './test-component2541.component';

describe('TestComponent2541Component', () => {
  let component: TestComponent2541Component;
  let fixture: ComponentFixture<TestComponent2541Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2541Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

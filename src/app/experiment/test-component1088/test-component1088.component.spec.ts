import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1088Component } from './test-component1088.component';

describe('TestComponent1088Component', () => {
  let component: TestComponent1088Component;
  let fixture: ComponentFixture<TestComponent1088Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1088Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

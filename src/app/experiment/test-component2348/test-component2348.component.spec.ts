import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2348Component } from './test-component2348.component';

describe('TestComponent2348Component', () => {
  let component: TestComponent2348Component;
  let fixture: ComponentFixture<TestComponent2348Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2348Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

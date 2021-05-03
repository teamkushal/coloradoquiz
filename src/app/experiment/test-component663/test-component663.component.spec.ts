import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent663Component } from './test-component663.component';

describe('TestComponent663Component', () => {
  let component: TestComponent663Component;
  let fixture: ComponentFixture<TestComponent663Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent663Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

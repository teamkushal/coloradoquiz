import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1836Component } from './test-component1836.component';

describe('TestComponent1836Component', () => {
  let component: TestComponent1836Component;
  let fixture: ComponentFixture<TestComponent1836Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1836Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

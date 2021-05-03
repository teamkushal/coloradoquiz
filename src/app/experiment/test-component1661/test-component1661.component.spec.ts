import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1661Component } from './test-component1661.component';

describe('TestComponent1661Component', () => {
  let component: TestComponent1661Component;
  let fixture: ComponentFixture<TestComponent1661Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1661Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

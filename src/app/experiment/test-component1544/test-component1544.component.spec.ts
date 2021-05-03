import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1544Component } from './test-component1544.component';

describe('TestComponent1544Component', () => {
  let component: TestComponent1544Component;
  let fixture: ComponentFixture<TestComponent1544Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1544Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

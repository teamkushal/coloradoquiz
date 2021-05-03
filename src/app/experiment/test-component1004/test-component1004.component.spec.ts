import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1004Component } from './test-component1004.component';

describe('TestComponent1004Component', () => {
  let component: TestComponent1004Component;
  let fixture: ComponentFixture<TestComponent1004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

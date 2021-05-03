import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1124Component } from './test-component1124.component';

describe('TestComponent1124Component', () => {
  let component: TestComponent1124Component;
  let fixture: ComponentFixture<TestComponent1124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

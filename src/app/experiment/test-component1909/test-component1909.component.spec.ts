import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1909Component } from './test-component1909.component';

describe('TestComponent1909Component', () => {
  let component: TestComponent1909Component;
  let fixture: ComponentFixture<TestComponent1909Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1909Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

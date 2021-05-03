import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3596Component } from './test-component3596.component';

describe('TestComponent3596Component', () => {
  let component: TestComponent3596Component;
  let fixture: ComponentFixture<TestComponent3596Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3596Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

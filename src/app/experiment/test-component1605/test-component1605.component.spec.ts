import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1605Component } from './test-component1605.component';

describe('TestComponent1605Component', () => {
  let component: TestComponent1605Component;
  let fixture: ComponentFixture<TestComponent1605Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1605Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

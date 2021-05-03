import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1563Component } from './test-component1563.component';

describe('TestComponent1563Component', () => {
  let component: TestComponent1563Component;
  let fixture: ComponentFixture<TestComponent1563Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1563Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

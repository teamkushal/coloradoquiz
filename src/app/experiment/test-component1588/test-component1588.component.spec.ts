import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1588Component } from './test-component1588.component';

describe('TestComponent1588Component', () => {
  let component: TestComponent1588Component;
  let fixture: ComponentFixture<TestComponent1588Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1588Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1807Component } from './test-component1807.component';

describe('TestComponent1807Component', () => {
  let component: TestComponent1807Component;
  let fixture: ComponentFixture<TestComponent1807Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1807Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

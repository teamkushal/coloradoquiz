import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1520Component } from './test-component1520.component';

describe('TestComponent1520Component', () => {
  let component: TestComponent1520Component;
  let fixture: ComponentFixture<TestComponent1520Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1520Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

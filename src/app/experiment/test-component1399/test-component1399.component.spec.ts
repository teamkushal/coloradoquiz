import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1399Component } from './test-component1399.component';

describe('TestComponent1399Component', () => {
  let component: TestComponent1399Component;
  let fixture: ComponentFixture<TestComponent1399Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1399Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

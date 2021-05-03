import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1485Component } from './test-component1485.component';

describe('TestComponent1485Component', () => {
  let component: TestComponent1485Component;
  let fixture: ComponentFixture<TestComponent1485Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1485Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1299Component } from './test-component1299.component';

describe('TestComponent1299Component', () => {
  let component: TestComponent1299Component;
  let fixture: ComponentFixture<TestComponent1299Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1299Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

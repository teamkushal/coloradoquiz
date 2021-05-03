import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1429Component } from './test-component1429.component';

describe('TestComponent1429Component', () => {
  let component: TestComponent1429Component;
  let fixture: ComponentFixture<TestComponent1429Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1429Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

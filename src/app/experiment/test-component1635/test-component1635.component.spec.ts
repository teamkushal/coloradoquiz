import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1635Component } from './test-component1635.component';

describe('TestComponent1635Component', () => {
  let component: TestComponent1635Component;
  let fixture: ComponentFixture<TestComponent1635Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1635Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

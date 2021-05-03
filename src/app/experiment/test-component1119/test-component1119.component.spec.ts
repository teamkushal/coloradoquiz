import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1119Component } from './test-component1119.component';

describe('TestComponent1119Component', () => {
  let component: TestComponent1119Component;
  let fixture: ComponentFixture<TestComponent1119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1119Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

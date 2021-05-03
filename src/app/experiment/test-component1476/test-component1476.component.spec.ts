import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1476Component } from './test-component1476.component';

describe('TestComponent1476Component', () => {
  let component: TestComponent1476Component;
  let fixture: ComponentFixture<TestComponent1476Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1476Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

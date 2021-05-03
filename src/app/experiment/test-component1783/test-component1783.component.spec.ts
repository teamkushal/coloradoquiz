import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1783Component } from './test-component1783.component';

describe('TestComponent1783Component', () => {
  let component: TestComponent1783Component;
  let fixture: ComponentFixture<TestComponent1783Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1783Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

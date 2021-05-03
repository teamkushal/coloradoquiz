import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1798Component } from './test-component1798.component';

describe('TestComponent1798Component', () => {
  let component: TestComponent1798Component;
  let fixture: ComponentFixture<TestComponent1798Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1798Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

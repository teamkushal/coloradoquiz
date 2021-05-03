import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1060Component } from './test-component1060.component';

describe('TestComponent1060Component', () => {
  let component: TestComponent1060Component;
  let fixture: ComponentFixture<TestComponent1060Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1060Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

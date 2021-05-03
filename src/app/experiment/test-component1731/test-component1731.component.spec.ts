import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1731Component } from './test-component1731.component';

describe('TestComponent1731Component', () => {
  let component: TestComponent1731Component;
  let fixture: ComponentFixture<TestComponent1731Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1731Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

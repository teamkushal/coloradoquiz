import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1887Component } from './test-component1887.component';

describe('TestComponent1887Component', () => {
  let component: TestComponent1887Component;
  let fixture: ComponentFixture<TestComponent1887Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1887Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

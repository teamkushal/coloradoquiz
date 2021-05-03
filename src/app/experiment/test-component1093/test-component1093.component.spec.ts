import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1093Component } from './test-component1093.component';

describe('TestComponent1093Component', () => {
  let component: TestComponent1093Component;
  let fixture: ComponentFixture<TestComponent1093Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1093Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

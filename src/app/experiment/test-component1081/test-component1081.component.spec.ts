import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1081Component } from './test-component1081.component';

describe('TestComponent1081Component', () => {
  let component: TestComponent1081Component;
  let fixture: ComponentFixture<TestComponent1081Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1081Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

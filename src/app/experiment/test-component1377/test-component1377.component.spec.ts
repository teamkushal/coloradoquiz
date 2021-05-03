import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1377Component } from './test-component1377.component';

describe('TestComponent1377Component', () => {
  let component: TestComponent1377Component;
  let fixture: ComponentFixture<TestComponent1377Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1377Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1863Component } from './test-component1863.component';

describe('TestComponent1863Component', () => {
  let component: TestComponent1863Component;
  let fixture: ComponentFixture<TestComponent1863Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1863Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1867Component } from './test-component1867.component';

describe('TestComponent1867Component', () => {
  let component: TestComponent1867Component;
  let fixture: ComponentFixture<TestComponent1867Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1867Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

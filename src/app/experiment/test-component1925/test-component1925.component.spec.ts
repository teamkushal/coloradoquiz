import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1925Component } from './test-component1925.component';

describe('TestComponent1925Component', () => {
  let component: TestComponent1925Component;
  let fixture: ComponentFixture<TestComponent1925Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1925Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

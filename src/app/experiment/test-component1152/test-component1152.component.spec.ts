import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1152Component } from './test-component1152.component';

describe('TestComponent1152Component', () => {
  let component: TestComponent1152Component;
  let fixture: ComponentFixture<TestComponent1152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1152Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

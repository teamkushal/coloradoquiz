import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1473Component } from './test-component1473.component';

describe('TestComponent1473Component', () => {
  let component: TestComponent1473Component;
  let fixture: ComponentFixture<TestComponent1473Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1473Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

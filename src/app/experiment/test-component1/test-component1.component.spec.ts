import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1Component } from './test-component1.component';

describe('TestComponent1Component', () => {
  let component: TestComponent1Component;
  let fixture: ComponentFixture<TestComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

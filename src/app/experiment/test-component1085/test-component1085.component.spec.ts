import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1085Component } from './test-component1085.component';

describe('TestComponent1085Component', () => {
  let component: TestComponent1085Component;
  let fixture: ComponentFixture<TestComponent1085Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1085Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

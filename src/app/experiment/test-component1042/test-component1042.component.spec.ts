import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1042Component } from './test-component1042.component';

describe('TestComponent1042Component', () => {
  let component: TestComponent1042Component;
  let fixture: ComponentFixture<TestComponent1042Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1042Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

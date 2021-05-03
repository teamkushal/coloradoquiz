import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2042Component } from './test-component2042.component';

describe('TestComponent2042Component', () => {
  let component: TestComponent2042Component;
  let fixture: ComponentFixture<TestComponent2042Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2042Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

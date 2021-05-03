import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2955Component } from './test-component2955.component';

describe('TestComponent2955Component', () => {
  let component: TestComponent2955Component;
  let fixture: ComponentFixture<TestComponent2955Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2955Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

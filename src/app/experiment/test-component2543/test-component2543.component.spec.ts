import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2543Component } from './test-component2543.component';

describe('TestComponent2543Component', () => {
  let component: TestComponent2543Component;
  let fixture: ComponentFixture<TestComponent2543Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2543Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

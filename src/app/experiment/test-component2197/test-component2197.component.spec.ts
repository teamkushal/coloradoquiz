import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2197Component } from './test-component2197.component';

describe('TestComponent2197Component', () => {
  let component: TestComponent2197Component;
  let fixture: ComponentFixture<TestComponent2197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2197Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2739Component } from './test-component2739.component';

describe('TestComponent2739Component', () => {
  let component: TestComponent2739Component;
  let fixture: ComponentFixture<TestComponent2739Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2739Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

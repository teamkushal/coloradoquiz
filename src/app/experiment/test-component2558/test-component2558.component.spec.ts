import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2558Component } from './test-component2558.component';

describe('TestComponent2558Component', () => {
  let component: TestComponent2558Component;
  let fixture: ComponentFixture<TestComponent2558Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2558Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

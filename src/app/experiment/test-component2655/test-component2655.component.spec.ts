import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2655Component } from './test-component2655.component';

describe('TestComponent2655Component', () => {
  let component: TestComponent2655Component;
  let fixture: ComponentFixture<TestComponent2655Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2655Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

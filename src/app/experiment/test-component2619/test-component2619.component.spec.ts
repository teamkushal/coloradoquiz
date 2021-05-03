import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2619Component } from './test-component2619.component';

describe('TestComponent2619Component', () => {
  let component: TestComponent2619Component;
  let fixture: ComponentFixture<TestComponent2619Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2619Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

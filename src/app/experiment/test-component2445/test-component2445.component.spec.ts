import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2445Component } from './test-component2445.component';

describe('TestComponent2445Component', () => {
  let component: TestComponent2445Component;
  let fixture: ComponentFixture<TestComponent2445Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2445Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

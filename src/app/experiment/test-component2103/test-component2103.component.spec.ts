import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2103Component } from './test-component2103.component';

describe('TestComponent2103Component', () => {
  let component: TestComponent2103Component;
  let fixture: ComponentFixture<TestComponent2103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

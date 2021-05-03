import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2293Component } from './test-component2293.component';

describe('TestComponent2293Component', () => {
  let component: TestComponent2293Component;
  let fixture: ComponentFixture<TestComponent2293Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2293Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

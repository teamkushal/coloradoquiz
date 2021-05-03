import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2894Component } from './test-component2894.component';

describe('TestComponent2894Component', () => {
  let component: TestComponent2894Component;
  let fixture: ComponentFixture<TestComponent2894Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2894Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

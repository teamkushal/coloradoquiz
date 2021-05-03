import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2209Component } from './test-component2209.component';

describe('TestComponent2209Component', () => {
  let component: TestComponent2209Component;
  let fixture: ComponentFixture<TestComponent2209Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2209Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

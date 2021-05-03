import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent632Component } from './test-component632.component';

describe('TestComponent632Component', () => {
  let component: TestComponent632Component;
  let fixture: ComponentFixture<TestComponent632Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent632Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

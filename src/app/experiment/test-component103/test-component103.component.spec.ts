import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent103Component } from './test-component103.component';

describe('TestComponent103Component', () => {
  let component: TestComponent103Component;
  let fixture: ComponentFixture<TestComponent103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

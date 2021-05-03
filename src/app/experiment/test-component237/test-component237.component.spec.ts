import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent237Component } from './test-component237.component';

describe('TestComponent237Component', () => {
  let component: TestComponent237Component;
  let fixture: ComponentFixture<TestComponent237Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent237Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

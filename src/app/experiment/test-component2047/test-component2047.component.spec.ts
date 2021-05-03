import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2047Component } from './test-component2047.component';

describe('TestComponent2047Component', () => {
  let component: TestComponent2047Component;
  let fixture: ComponentFixture<TestComponent2047Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2047Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

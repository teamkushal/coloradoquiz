import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2833Component } from './test-component2833.component';

describe('TestComponent2833Component', () => {
  let component: TestComponent2833Component;
  let fixture: ComponentFixture<TestComponent2833Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2833Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

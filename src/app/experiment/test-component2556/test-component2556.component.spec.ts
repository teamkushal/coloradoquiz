import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2556Component } from './test-component2556.component';

describe('TestComponent2556Component', () => {
  let component: TestComponent2556Component;
  let fixture: ComponentFixture<TestComponent2556Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2556Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

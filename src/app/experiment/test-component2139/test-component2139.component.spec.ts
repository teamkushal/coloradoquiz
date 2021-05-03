import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2139Component } from './test-component2139.component';

describe('TestComponent2139Component', () => {
  let component: TestComponent2139Component;
  let fixture: ComponentFixture<TestComponent2139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

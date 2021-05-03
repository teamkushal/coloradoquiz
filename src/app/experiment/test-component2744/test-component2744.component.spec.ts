import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2744Component } from './test-component2744.component';

describe('TestComponent2744Component', () => {
  let component: TestComponent2744Component;
  let fixture: ComponentFixture<TestComponent2744Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2744Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

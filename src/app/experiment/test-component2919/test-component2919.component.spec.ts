import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2919Component } from './test-component2919.component';

describe('TestComponent2919Component', () => {
  let component: TestComponent2919Component;
  let fixture: ComponentFixture<TestComponent2919Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2919Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

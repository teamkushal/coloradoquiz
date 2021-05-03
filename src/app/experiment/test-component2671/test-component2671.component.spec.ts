import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2671Component } from './test-component2671.component';

describe('TestComponent2671Component', () => {
  let component: TestComponent2671Component;
  let fixture: ComponentFixture<TestComponent2671Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2671Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

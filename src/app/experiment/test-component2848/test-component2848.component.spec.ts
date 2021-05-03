import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2848Component } from './test-component2848.component';

describe('TestComponent2848Component', () => {
  let component: TestComponent2848Component;
  let fixture: ComponentFixture<TestComponent2848Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2848Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2470Component } from './test-component2470.component';

describe('TestComponent2470Component', () => {
  let component: TestComponent2470Component;
  let fixture: ComponentFixture<TestComponent2470Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2470Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

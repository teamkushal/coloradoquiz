import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2472Component } from './test-component2472.component';

describe('TestComponent2472Component', () => {
  let component: TestComponent2472Component;
  let fixture: ComponentFixture<TestComponent2472Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2472Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

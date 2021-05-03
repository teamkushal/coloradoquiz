import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2267Component } from './test-component2267.component';

describe('TestComponent2267Component', () => {
  let component: TestComponent2267Component;
  let fixture: ComponentFixture<TestComponent2267Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2267Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

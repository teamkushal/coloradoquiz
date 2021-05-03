import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2871Component } from './test-component2871.component';

describe('TestComponent2871Component', () => {
  let component: TestComponent2871Component;
  let fixture: ComponentFixture<TestComponent2871Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2871Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

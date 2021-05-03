import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent485Component } from './test-component485.component';

describe('TestComponent485Component', () => {
  let component: TestComponent485Component;
  let fixture: ComponentFixture<TestComponent485Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent485Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

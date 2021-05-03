import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2603Component } from './test-component2603.component';

describe('TestComponent2603Component', () => {
  let component: TestComponent2603Component;
  let fixture: ComponentFixture<TestComponent2603Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2603Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

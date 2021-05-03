import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent925Component } from './test-component925.component';

describe('TestComponent925Component', () => {
  let component: TestComponent925Component;
  let fixture: ComponentFixture<TestComponent925Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent925Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

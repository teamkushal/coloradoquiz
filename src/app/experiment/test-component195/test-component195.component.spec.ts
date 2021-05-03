import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent195Component } from './test-component195.component';

describe('TestComponent195Component', () => {
  let component: TestComponent195Component;
  let fixture: ComponentFixture<TestComponent195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent195Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

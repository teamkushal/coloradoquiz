import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2230Component } from './test-component2230.component';

describe('TestComponent2230Component', () => {
  let component: TestComponent2230Component;
  let fixture: ComponentFixture<TestComponent2230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2230Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

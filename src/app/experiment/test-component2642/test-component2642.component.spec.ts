import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2642Component } from './test-component2642.component';

describe('TestComponent2642Component', () => {
  let component: TestComponent2642Component;
  let fixture: ComponentFixture<TestComponent2642Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2642Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

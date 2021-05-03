import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2897Component } from './test-component2897.component';

describe('TestComponent2897Component', () => {
  let component: TestComponent2897Component;
  let fixture: ComponentFixture<TestComponent2897Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2897Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

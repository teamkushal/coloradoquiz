import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2292Component } from './test-component2292.component';

describe('TestComponent2292Component', () => {
  let component: TestComponent2292Component;
  let fixture: ComponentFixture<TestComponent2292Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2292Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

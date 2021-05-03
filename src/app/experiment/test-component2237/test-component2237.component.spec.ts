import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2237Component } from './test-component2237.component';

describe('TestComponent2237Component', () => {
  let component: TestComponent2237Component;
  let fixture: ComponentFixture<TestComponent2237Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2237Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2277Component } from './test-component2277.component';

describe('TestComponent2277Component', () => {
  let component: TestComponent2277Component;
  let fixture: ComponentFixture<TestComponent2277Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2277Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

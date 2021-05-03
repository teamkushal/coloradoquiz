import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2425Component } from './test-component2425.component';

describe('TestComponent2425Component', () => {
  let component: TestComponent2425Component;
  let fixture: ComponentFixture<TestComponent2425Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2425Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

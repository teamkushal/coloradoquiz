import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2378Component } from './test-component2378.component';

describe('TestComponent2378Component', () => {
  let component: TestComponent2378Component;
  let fixture: ComponentFixture<TestComponent2378Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2378Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

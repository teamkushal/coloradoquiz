import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2284Component } from './test-component2284.component';

describe('TestComponent2284Component', () => {
  let component: TestComponent2284Component;
  let fixture: ComponentFixture<TestComponent2284Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2284Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

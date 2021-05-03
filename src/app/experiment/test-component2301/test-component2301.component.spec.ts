import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2301Component } from './test-component2301.component';

describe('TestComponent2301Component', () => {
  let component: TestComponent2301Component;
  let fixture: ComponentFixture<TestComponent2301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2301Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

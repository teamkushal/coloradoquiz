import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2088Component } from './test-component2088.component';

describe('TestComponent2088Component', () => {
  let component: TestComponent2088Component;
  let fixture: ComponentFixture<TestComponent2088Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2088Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

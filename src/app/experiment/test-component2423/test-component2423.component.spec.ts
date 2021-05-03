import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2423Component } from './test-component2423.component';

describe('TestComponent2423Component', () => {
  let component: TestComponent2423Component;
  let fixture: ComponentFixture<TestComponent2423Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2423Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

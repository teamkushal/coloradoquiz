import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2914Component } from './test-component2914.component';

describe('TestComponent2914Component', () => {
  let component: TestComponent2914Component;
  let fixture: ComponentFixture<TestComponent2914Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2914Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

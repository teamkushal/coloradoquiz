import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1653Component } from './test-component1653.component';

describe('TestComponent1653Component', () => {
  let component: TestComponent1653Component;
  let fixture: ComponentFixture<TestComponent1653Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1653Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

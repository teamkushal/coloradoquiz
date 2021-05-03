import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1950Component } from './test-component1950.component';

describe('TestComponent1950Component', () => {
  let component: TestComponent1950Component;
  let fixture: ComponentFixture<TestComponent1950Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1950Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

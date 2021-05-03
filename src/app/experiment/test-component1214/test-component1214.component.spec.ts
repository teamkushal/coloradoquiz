import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1214Component } from './test-component1214.component';

describe('TestComponent1214Component', () => {
  let component: TestComponent1214Component;
  let fixture: ComponentFixture<TestComponent1214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1214Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

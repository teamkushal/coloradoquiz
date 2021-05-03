import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1086Component } from './test-component1086.component';

describe('TestComponent1086Component', () => {
  let component: TestComponent1086Component;
  let fixture: ComponentFixture<TestComponent1086Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1086Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

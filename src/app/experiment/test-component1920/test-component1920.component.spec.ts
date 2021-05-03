import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1920Component } from './test-component1920.component';

describe('TestComponent1920Component', () => {
  let component: TestComponent1920Component;
  let fixture: ComponentFixture<TestComponent1920Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1920Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

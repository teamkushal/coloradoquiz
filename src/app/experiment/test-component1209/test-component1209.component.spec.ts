import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1209Component } from './test-component1209.component';

describe('TestComponent1209Component', () => {
  let component: TestComponent1209Component;
  let fixture: ComponentFixture<TestComponent1209Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1209Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

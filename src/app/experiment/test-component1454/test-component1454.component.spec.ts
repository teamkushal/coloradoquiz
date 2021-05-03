import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1454Component } from './test-component1454.component';

describe('TestComponent1454Component', () => {
  let component: TestComponent1454Component;
  let fixture: ComponentFixture<TestComponent1454Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1454Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

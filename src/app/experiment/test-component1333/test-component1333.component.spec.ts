import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1333Component } from './test-component1333.component';

describe('TestComponent1333Component', () => {
  let component: TestComponent1333Component;
  let fixture: ComponentFixture<TestComponent1333Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1333Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

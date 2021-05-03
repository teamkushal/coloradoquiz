import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent886Component } from './test-component886.component';

describe('TestComponent886Component', () => {
  let component: TestComponent886Component;
  let fixture: ComponentFixture<TestComponent886Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent886Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

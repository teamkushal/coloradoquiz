import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1100Component } from './test-component1100.component';

describe('TestComponent1100Component', () => {
  let component: TestComponent1100Component;
  let fixture: ComponentFixture<TestComponent1100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

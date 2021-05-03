import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1751Component } from './test-component1751.component';

describe('TestComponent1751Component', () => {
  let component: TestComponent1751Component;
  let fixture: ComponentFixture<TestComponent1751Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1751Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

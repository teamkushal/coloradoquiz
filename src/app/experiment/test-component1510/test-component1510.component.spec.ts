import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1510Component } from './test-component1510.component';

describe('TestComponent1510Component', () => {
  let component: TestComponent1510Component;
  let fixture: ComponentFixture<TestComponent1510Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1510Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

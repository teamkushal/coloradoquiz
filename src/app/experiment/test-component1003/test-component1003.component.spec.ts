import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1003Component } from './test-component1003.component';

describe('TestComponent1003Component', () => {
  let component: TestComponent1003Component;
  let fixture: ComponentFixture<TestComponent1003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

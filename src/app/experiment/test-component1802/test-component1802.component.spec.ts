import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1802Component } from './test-component1802.component';

describe('TestComponent1802Component', () => {
  let component: TestComponent1802Component;
  let fixture: ComponentFixture<TestComponent1802Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1802Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

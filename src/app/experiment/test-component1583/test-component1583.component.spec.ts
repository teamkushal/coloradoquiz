import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1583Component } from './test-component1583.component';

describe('TestComponent1583Component', () => {
  let component: TestComponent1583Component;
  let fixture: ComponentFixture<TestComponent1583Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1583Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

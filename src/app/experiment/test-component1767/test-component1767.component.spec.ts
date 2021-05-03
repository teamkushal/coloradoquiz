import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1767Component } from './test-component1767.component';

describe('TestComponent1767Component', () => {
  let component: TestComponent1767Component;
  let fixture: ComponentFixture<TestComponent1767Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1767Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

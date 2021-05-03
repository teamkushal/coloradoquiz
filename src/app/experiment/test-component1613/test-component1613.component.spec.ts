import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1613Component } from './test-component1613.component';

describe('TestComponent1613Component', () => {
  let component: TestComponent1613Component;
  let fixture: ComponentFixture<TestComponent1613Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1613Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

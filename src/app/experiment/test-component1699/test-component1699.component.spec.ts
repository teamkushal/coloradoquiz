import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1699Component } from './test-component1699.component';

describe('TestComponent1699Component', () => {
  let component: TestComponent1699Component;
  let fixture: ComponentFixture<TestComponent1699Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1699Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

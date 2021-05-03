import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1599Component } from './test-component1599.component';

describe('TestComponent1599Component', () => {
  let component: TestComponent1599Component;
  let fixture: ComponentFixture<TestComponent1599Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1599Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

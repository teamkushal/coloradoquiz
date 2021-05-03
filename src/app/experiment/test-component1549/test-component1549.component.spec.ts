import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1549Component } from './test-component1549.component';

describe('TestComponent1549Component', () => {
  let component: TestComponent1549Component;
  let fixture: ComponentFixture<TestComponent1549Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1549Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

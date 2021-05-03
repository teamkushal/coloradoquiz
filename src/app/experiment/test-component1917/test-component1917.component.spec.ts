import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1917Component } from './test-component1917.component';

describe('TestComponent1917Component', () => {
  let component: TestComponent1917Component;
  let fixture: ComponentFixture<TestComponent1917Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1917Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

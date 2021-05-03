import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1736Component } from './test-component1736.component';

describe('TestComponent1736Component', () => {
  let component: TestComponent1736Component;
  let fixture: ComponentFixture<TestComponent1736Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1736Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

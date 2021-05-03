import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1928Component } from './test-component1928.component';

describe('TestComponent1928Component', () => {
  let component: TestComponent1928Component;
  let fixture: ComponentFixture<TestComponent1928Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1928Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

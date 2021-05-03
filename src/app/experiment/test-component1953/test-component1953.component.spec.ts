import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1953Component } from './test-component1953.component';

describe('TestComponent1953Component', () => {
  let component: TestComponent1953Component;
  let fixture: ComponentFixture<TestComponent1953Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1953Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

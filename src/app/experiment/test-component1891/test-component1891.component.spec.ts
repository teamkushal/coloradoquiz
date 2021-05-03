import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1891Component } from './test-component1891.component';

describe('TestComponent1891Component', () => {
  let component: TestComponent1891Component;
  let fixture: ComponentFixture<TestComponent1891Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1891Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

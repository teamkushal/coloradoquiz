import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1943Component } from './test-component1943.component';

describe('TestComponent1943Component', () => {
  let component: TestComponent1943Component;
  let fixture: ComponentFixture<TestComponent1943Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1943Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1938Component } from './test-component1938.component';

describe('TestComponent1938Component', () => {
  let component: TestComponent1938Component;
  let fixture: ComponentFixture<TestComponent1938Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1938Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

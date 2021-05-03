import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1668Component } from './test-component1668.component';

describe('TestComponent1668Component', () => {
  let component: TestComponent1668Component;
  let fixture: ComponentFixture<TestComponent1668Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1668Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

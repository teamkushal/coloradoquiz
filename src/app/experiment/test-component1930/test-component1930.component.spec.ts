import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1930Component } from './test-component1930.component';

describe('TestComponent1930Component', () => {
  let component: TestComponent1930Component;
  let fixture: ComponentFixture<TestComponent1930Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1930Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

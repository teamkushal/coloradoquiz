import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1968Component } from './test-component1968.component';

describe('TestComponent1968Component', () => {
  let component: TestComponent1968Component;
  let fixture: ComponentFixture<TestComponent1968Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1968Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

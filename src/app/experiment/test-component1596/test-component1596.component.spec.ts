import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1596Component } from './test-component1596.component';

describe('TestComponent1596Component', () => {
  let component: TestComponent1596Component;
  let fixture: ComponentFixture<TestComponent1596Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1596Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1988Component } from './test-component1988.component';

describe('TestComponent1988Component', () => {
  let component: TestComponent1988Component;
  let fixture: ComponentFixture<TestComponent1988Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1988Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

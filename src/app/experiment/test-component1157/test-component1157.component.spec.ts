import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1157Component } from './test-component1157.component';

describe('TestComponent1157Component', () => {
  let component: TestComponent1157Component;
  let fixture: ComponentFixture<TestComponent1157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

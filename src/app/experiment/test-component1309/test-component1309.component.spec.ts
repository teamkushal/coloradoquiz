import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1309Component } from './test-component1309.component';

describe('TestComponent1309Component', () => {
  let component: TestComponent1309Component;
  let fixture: ComponentFixture<TestComponent1309Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1309Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

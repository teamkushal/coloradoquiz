import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2309Component } from './test-component2309.component';

describe('TestComponent2309Component', () => {
  let component: TestComponent2309Component;
  let fixture: ComponentFixture<TestComponent2309Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2309Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

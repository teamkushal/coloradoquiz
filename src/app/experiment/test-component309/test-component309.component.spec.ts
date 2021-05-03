import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent309Component } from './test-component309.component';

describe('TestComponent309Component', () => {
  let component: TestComponent309Component;
  let fixture: ComponentFixture<TestComponent309Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent309Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

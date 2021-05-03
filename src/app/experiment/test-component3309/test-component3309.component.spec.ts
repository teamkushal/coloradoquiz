import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3309Component } from './test-component3309.component';

describe('TestComponent3309Component', () => {
  let component: TestComponent3309Component;
  let fixture: ComponentFixture<TestComponent3309Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3309Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

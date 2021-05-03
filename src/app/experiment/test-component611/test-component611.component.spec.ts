import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent611Component } from './test-component611.component';

describe('TestComponent611Component', () => {
  let component: TestComponent611Component;
  let fixture: ComponentFixture<TestComponent611Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent611Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

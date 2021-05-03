import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3611Component } from './test-component3611.component';

describe('TestComponent3611Component', () => {
  let component: TestComponent3611Component;
  let fixture: ComponentFixture<TestComponent3611Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3611Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

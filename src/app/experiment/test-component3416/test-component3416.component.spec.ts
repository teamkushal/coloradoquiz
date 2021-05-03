import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3416Component } from './test-component3416.component';

describe('TestComponent3416Component', () => {
  let component: TestComponent3416Component;
  let fixture: ComponentFixture<TestComponent3416Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3416Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

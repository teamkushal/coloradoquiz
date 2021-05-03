import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3084Component } from './test-component3084.component';

describe('TestComponent3084Component', () => {
  let component: TestComponent3084Component;
  let fixture: ComponentFixture<TestComponent3084Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3084Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

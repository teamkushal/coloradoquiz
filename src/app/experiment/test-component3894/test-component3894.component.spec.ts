import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3894Component } from './test-component3894.component';

describe('TestComponent3894Component', () => {
  let component: TestComponent3894Component;
  let fixture: ComponentFixture<TestComponent3894Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3894Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

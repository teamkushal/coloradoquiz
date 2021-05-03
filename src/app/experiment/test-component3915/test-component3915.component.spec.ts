import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3915Component } from './test-component3915.component';

describe('TestComponent3915Component', () => {
  let component: TestComponent3915Component;
  let fixture: ComponentFixture<TestComponent3915Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3915Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

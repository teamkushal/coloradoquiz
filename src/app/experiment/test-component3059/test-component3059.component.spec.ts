import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3059Component } from './test-component3059.component';

describe('TestComponent3059Component', () => {
  let component: TestComponent3059Component;
  let fixture: ComponentFixture<TestComponent3059Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3059Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

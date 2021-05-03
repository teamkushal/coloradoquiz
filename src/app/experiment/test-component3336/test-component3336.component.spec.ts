import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3336Component } from './test-component3336.component';

describe('TestComponent3336Component', () => {
  let component: TestComponent3336Component;
  let fixture: ComponentFixture<TestComponent3336Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3336Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

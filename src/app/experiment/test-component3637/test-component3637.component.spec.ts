import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3637Component } from './test-component3637.component';

describe('TestComponent3637Component', () => {
  let component: TestComponent3637Component;
  let fixture: ComponentFixture<TestComponent3637Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3637Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

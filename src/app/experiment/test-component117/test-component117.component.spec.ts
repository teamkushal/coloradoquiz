import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent117Component } from './test-component117.component';

describe('TestComponent117Component', () => {
  let component: TestComponent117Component;
  let fixture: ComponentFixture<TestComponent117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

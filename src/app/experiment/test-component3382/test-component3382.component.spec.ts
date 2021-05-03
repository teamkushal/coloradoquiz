import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3382Component } from './test-component3382.component';

describe('TestComponent3382Component', () => {
  let component: TestComponent3382Component;
  let fixture: ComponentFixture<TestComponent3382Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3382Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

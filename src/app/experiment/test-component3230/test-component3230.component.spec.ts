import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3230Component } from './test-component3230.component';

describe('TestComponent3230Component', () => {
  let component: TestComponent3230Component;
  let fixture: ComponentFixture<TestComponent3230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3230Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

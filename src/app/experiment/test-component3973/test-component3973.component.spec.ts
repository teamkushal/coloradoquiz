import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3973Component } from './test-component3973.component';

describe('TestComponent3973Component', () => {
  let component: TestComponent3973Component;
  let fixture: ComponentFixture<TestComponent3973Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3973Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

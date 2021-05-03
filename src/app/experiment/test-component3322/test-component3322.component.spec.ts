import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3322Component } from './test-component3322.component';

describe('TestComponent3322Component', () => {
  let component: TestComponent3322Component;
  let fixture: ComponentFixture<TestComponent3322Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3322Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

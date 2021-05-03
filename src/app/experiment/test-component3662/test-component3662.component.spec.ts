import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3662Component } from './test-component3662.component';

describe('TestComponent3662Component', () => {
  let component: TestComponent3662Component;
  let fixture: ComponentFixture<TestComponent3662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3662Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

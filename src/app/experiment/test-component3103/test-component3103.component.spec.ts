import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3103Component } from './test-component3103.component';

describe('TestComponent3103Component', () => {
  let component: TestComponent3103Component;
  let fixture: ComponentFixture<TestComponent3103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

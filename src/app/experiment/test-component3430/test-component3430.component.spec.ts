import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3430Component } from './test-component3430.component';

describe('TestComponent3430Component', () => {
  let component: TestComponent3430Component;
  let fixture: ComponentFixture<TestComponent3430Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3430Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3926Component } from './test-component3926.component';

describe('TestComponent3926Component', () => {
  let component: TestComponent3926Component;
  let fixture: ComponentFixture<TestComponent3926Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3926Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

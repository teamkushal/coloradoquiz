import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3423Component } from './test-component3423.component';

describe('TestComponent3423Component', () => {
  let component: TestComponent3423Component;
  let fixture: ComponentFixture<TestComponent3423Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3423Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

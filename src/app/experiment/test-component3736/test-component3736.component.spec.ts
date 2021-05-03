import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3736Component } from './test-component3736.component';

describe('TestComponent3736Component', () => {
  let component: TestComponent3736Component;
  let fixture: ComponentFixture<TestComponent3736Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3736Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

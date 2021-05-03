import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3217Component } from './test-component3217.component';

describe('TestComponent3217Component', () => {
  let component: TestComponent3217Component;
  let fixture: ComponentFixture<TestComponent3217Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3217Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

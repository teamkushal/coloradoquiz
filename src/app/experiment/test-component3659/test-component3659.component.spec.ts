import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3659Component } from './test-component3659.component';

describe('TestComponent3659Component', () => {
  let component: TestComponent3659Component;
  let fixture: ComponentFixture<TestComponent3659Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3659Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

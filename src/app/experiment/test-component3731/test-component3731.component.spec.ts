import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3731Component } from './test-component3731.component';

describe('TestComponent3731Component', () => {
  let component: TestComponent3731Component;
  let fixture: ComponentFixture<TestComponent3731Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3731Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

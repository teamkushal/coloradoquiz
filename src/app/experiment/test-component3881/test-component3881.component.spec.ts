import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3881Component } from './test-component3881.component';

describe('TestComponent3881Component', () => {
  let component: TestComponent3881Component;
  let fixture: ComponentFixture<TestComponent3881Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3881Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

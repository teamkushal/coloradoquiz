import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3530Component } from './test-component3530.component';

describe('TestComponent3530Component', () => {
  let component: TestComponent3530Component;
  let fixture: ComponentFixture<TestComponent3530Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3530Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

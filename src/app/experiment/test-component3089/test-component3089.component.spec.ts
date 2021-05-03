import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3089Component } from './test-component3089.component';

describe('TestComponent3089Component', () => {
  let component: TestComponent3089Component;
  let fixture: ComponentFixture<TestComponent3089Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3089Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

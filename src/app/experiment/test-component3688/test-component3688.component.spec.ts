import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3688Component } from './test-component3688.component';

describe('TestComponent3688Component', () => {
  let component: TestComponent3688Component;
  let fixture: ComponentFixture<TestComponent3688Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3688Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

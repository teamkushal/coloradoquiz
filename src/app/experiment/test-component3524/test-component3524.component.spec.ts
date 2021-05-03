import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3524Component } from './test-component3524.component';

describe('TestComponent3524Component', () => {
  let component: TestComponent3524Component;
  let fixture: ComponentFixture<TestComponent3524Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3524Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

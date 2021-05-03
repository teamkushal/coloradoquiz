import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3861Component } from './test-component3861.component';

describe('TestComponent3861Component', () => {
  let component: TestComponent3861Component;
  let fixture: ComponentFixture<TestComponent3861Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3861Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

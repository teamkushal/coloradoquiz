import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3277Component } from './test-component3277.component';

describe('TestComponent3277Component', () => {
  let component: TestComponent3277Component;
  let fixture: ComponentFixture<TestComponent3277Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3277Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

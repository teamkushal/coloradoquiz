import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3787Component } from './test-component3787.component';

describe('TestComponent3787Component', () => {
  let component: TestComponent3787Component;
  let fixture: ComponentFixture<TestComponent3787Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3787Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

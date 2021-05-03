import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3463Component } from './test-component3463.component';

describe('TestComponent3463Component', () => {
  let component: TestComponent3463Component;
  let fixture: ComponentFixture<TestComponent3463Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3463Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

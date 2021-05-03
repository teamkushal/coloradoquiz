import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3613Component } from './test-component3613.component';

describe('TestComponent3613Component', () => {
  let component: TestComponent3613Component;
  let fixture: ComponentFixture<TestComponent3613Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3613Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

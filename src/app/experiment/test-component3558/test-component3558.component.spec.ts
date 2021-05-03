import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3558Component } from './test-component3558.component';

describe('TestComponent3558Component', () => {
  let component: TestComponent3558Component;
  let fixture: ComponentFixture<TestComponent3558Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3558Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3562Component } from './test-component3562.component';

describe('TestComponent3562Component', () => {
  let component: TestComponent3562Component;
  let fixture: ComponentFixture<TestComponent3562Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3562Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

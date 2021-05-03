import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3446Component } from './test-component3446.component';

describe('TestComponent3446Component', () => {
  let component: TestComponent3446Component;
  let fixture: ComponentFixture<TestComponent3446Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3446Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

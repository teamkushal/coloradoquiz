import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3801Component } from './test-component3801.component';

describe('TestComponent3801Component', () => {
  let component: TestComponent3801Component;
  let fixture: ComponentFixture<TestComponent3801Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3801Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

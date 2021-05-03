import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3195Component } from './test-component3195.component';

describe('TestComponent3195Component', () => {
  let component: TestComponent3195Component;
  let fixture: ComponentFixture<TestComponent3195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3195Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

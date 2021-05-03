import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3871Component } from './test-component3871.component';

describe('TestComponent3871Component', () => {
  let component: TestComponent3871Component;
  let fixture: ComponentFixture<TestComponent3871Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3871Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

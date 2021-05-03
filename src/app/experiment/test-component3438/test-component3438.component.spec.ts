import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3438Component } from './test-component3438.component';

describe('TestComponent3438Component', () => {
  let component: TestComponent3438Component;
  let fixture: ComponentFixture<TestComponent3438Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3438Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

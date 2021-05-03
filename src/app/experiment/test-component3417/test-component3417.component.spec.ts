import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3417Component } from './test-component3417.component';

describe('TestComponent3417Component', () => {
  let component: TestComponent3417Component;
  let fixture: ComponentFixture<TestComponent3417Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3417Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

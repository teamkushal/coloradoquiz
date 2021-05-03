import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3925Component } from './test-component3925.component';

describe('TestComponent3925Component', () => {
  let component: TestComponent3925Component;
  let fixture: ComponentFixture<TestComponent3925Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3925Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

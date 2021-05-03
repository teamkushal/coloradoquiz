import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3267Component } from './test-component3267.component';

describe('TestComponent3267Component', () => {
  let component: TestComponent3267Component;
  let fixture: ComponentFixture<TestComponent3267Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3267Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

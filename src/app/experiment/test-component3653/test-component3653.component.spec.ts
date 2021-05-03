import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3653Component } from './test-component3653.component';

describe('TestComponent3653Component', () => {
  let component: TestComponent3653Component;
  let fixture: ComponentFixture<TestComponent3653Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3653Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

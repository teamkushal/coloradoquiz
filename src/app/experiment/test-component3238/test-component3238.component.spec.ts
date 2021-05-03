import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3238Component } from './test-component3238.component';

describe('TestComponent3238Component', () => {
  let component: TestComponent3238Component;
  let fixture: ComponentFixture<TestComponent3238Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3238Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

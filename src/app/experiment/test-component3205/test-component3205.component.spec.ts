import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3205Component } from './test-component3205.component';

describe('TestComponent3205Component', () => {
  let component: TestComponent3205Component;
  let fixture: ComponentFixture<TestComponent3205Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3205Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

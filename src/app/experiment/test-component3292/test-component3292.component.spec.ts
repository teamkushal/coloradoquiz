import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3292Component } from './test-component3292.component';

describe('TestComponent3292Component', () => {
  let component: TestComponent3292Component;
  let fixture: ComponentFixture<TestComponent3292Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3292Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3237Component } from './test-component3237.component';

describe('TestComponent3237Component', () => {
  let component: TestComponent3237Component;
  let fixture: ComponentFixture<TestComponent3237Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3237Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

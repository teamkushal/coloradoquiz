import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3202Component } from './test-component3202.component';

describe('TestComponent3202Component', () => {
  let component: TestComponent3202Component;
  let fixture: ComponentFixture<TestComponent3202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3202Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3661Component } from './test-component3661.component';

describe('TestComponent3661Component', () => {
  let component: TestComponent3661Component;
  let fixture: ComponentFixture<TestComponent3661Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3661Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3123Component } from './test-component3123.component';

describe('TestComponent3123Component', () => {
  let component: TestComponent3123Component;
  let fixture: ComponentFixture<TestComponent3123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

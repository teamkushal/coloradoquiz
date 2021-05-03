import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3424Component } from './test-component3424.component';

describe('TestComponent3424Component', () => {
  let component: TestComponent3424Component;
  let fixture: ComponentFixture<TestComponent3424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3424Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

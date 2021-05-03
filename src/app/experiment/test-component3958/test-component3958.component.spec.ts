import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3958Component } from './test-component3958.component';

describe('TestComponent3958Component', () => {
  let component: TestComponent3958Component;
  let fixture: ComponentFixture<TestComponent3958Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3958Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

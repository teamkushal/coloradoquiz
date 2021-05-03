import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3865Component } from './test-component3865.component';

describe('TestComponent3865Component', () => {
  let component: TestComponent3865Component;
  let fixture: ComponentFixture<TestComponent3865Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3865Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

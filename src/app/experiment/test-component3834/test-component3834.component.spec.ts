import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3834Component } from './test-component3834.component';

describe('TestComponent3834Component', () => {
  let component: TestComponent3834Component;
  let fixture: ComponentFixture<TestComponent3834Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3834Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

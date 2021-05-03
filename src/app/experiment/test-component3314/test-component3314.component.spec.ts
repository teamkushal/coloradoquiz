import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3314Component } from './test-component3314.component';

describe('TestComponent3314Component', () => {
  let component: TestComponent3314Component;
  let fixture: ComponentFixture<TestComponent3314Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3314Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

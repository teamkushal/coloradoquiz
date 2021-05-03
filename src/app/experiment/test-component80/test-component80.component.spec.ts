import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent80Component } from './test-component80.component';

describe('TestComponent80Component', () => {
  let component: TestComponent80Component;
  let fixture: ComponentFixture<TestComponent80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent80Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

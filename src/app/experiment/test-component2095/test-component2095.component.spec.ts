import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2095Component } from './test-component2095.component';

describe('TestComponent2095Component', () => {
  let component: TestComponent2095Component;
  let fixture: ComponentFixture<TestComponent2095Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2095Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

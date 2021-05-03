import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent955Component } from './test-component955.component';

describe('TestComponent955Component', () => {
  let component: TestComponent955Component;
  let fixture: ComponentFixture<TestComponent955Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent955Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

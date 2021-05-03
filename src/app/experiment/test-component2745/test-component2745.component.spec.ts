import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2745Component } from './test-component2745.component';

describe('TestComponent2745Component', () => {
  let component: TestComponent2745Component;
  let fixture: ComponentFixture<TestComponent2745Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2745Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

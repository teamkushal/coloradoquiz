import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent745Component } from './test-component745.component';

describe('TestComponent745Component', () => {
  let component: TestComponent745Component;
  let fixture: ComponentFixture<TestComponent745Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent745Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

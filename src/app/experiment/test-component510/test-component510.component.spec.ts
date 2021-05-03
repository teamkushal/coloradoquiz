import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent510Component } from './test-component510.component';

describe('TestComponent510Component', () => {
  let component: TestComponent510Component;
  let fixture: ComponentFixture<TestComponent510Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent510Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

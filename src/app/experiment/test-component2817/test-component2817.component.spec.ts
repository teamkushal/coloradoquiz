import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2817Component } from './test-component2817.component';

describe('TestComponent2817Component', () => {
  let component: TestComponent2817Component;
  let fixture: ComponentFixture<TestComponent2817Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2817Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

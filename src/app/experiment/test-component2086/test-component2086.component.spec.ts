import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2086Component } from './test-component2086.component';

describe('TestComponent2086Component', () => {
  let component: TestComponent2086Component;
  let fixture: ComponentFixture<TestComponent2086Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2086Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent646Component } from './test-component646.component';

describe('TestComponent646Component', () => {
  let component: TestComponent646Component;
  let fixture: ComponentFixture<TestComponent646Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent646Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

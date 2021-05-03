import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2832Component } from './test-component2832.component';

describe('TestComponent2832Component', () => {
  let component: TestComponent2832Component;
  let fixture: ComponentFixture<TestComponent2832Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2832Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent382Component } from './test-component382.component';

describe('TestComponent382Component', () => {
  let component: TestComponent382Component;
  let fixture: ComponentFixture<TestComponent382Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent382Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

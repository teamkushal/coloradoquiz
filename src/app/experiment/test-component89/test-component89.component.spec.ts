import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent89Component } from './test-component89.component';

describe('TestComponent89Component', () => {
  let component: TestComponent89Component;
  let fixture: ComponentFixture<TestComponent89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent89Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent574Component } from './test-component574.component';

describe('TestComponent574Component', () => {
  let component: TestComponent574Component;
  let fixture: ComponentFixture<TestComponent574Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent574Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

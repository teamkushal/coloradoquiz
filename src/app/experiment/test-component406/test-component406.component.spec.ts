import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent406Component } from './test-component406.component';

describe('TestComponent406Component', () => {
  let component: TestComponent406Component;
  let fixture: ComponentFixture<TestComponent406Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent406Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

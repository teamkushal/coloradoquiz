import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent209Component } from './test-component209.component';

describe('TestComponent209Component', () => {
  let component: TestComponent209Component;
  let fixture: ComponentFixture<TestComponent209Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent209Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

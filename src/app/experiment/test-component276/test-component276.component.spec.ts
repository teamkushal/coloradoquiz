import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent276Component } from './test-component276.component';

describe('TestComponent276Component', () => {
  let component: TestComponent276Component;
  let fixture: ComponentFixture<TestComponent276Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent276Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

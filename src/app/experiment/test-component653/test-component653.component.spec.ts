import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent653Component } from './test-component653.component';

describe('TestComponent653Component', () => {
  let component: TestComponent653Component;
  let fixture: ComponentFixture<TestComponent653Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent653Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

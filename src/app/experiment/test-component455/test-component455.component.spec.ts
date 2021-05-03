import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent455Component } from './test-component455.component';

describe('TestComponent455Component', () => {
  let component: TestComponent455Component;
  let fixture: ComponentFixture<TestComponent455Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent455Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

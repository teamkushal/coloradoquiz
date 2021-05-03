import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent20Component } from './test-component20.component';

describe('TestComponent20Component', () => {
  let component: TestComponent20Component;
  let fixture: ComponentFixture<TestComponent20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

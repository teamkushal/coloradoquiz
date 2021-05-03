import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent544Component } from './test-component544.component';

describe('TestComponent544Component', () => {
  let component: TestComponent544Component;
  let fixture: ComponentFixture<TestComponent544Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent544Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

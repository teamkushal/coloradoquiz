import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent445Component } from './test-component445.component';

describe('TestComponent445Component', () => {
  let component: TestComponent445Component;
  let fixture: ComponentFixture<TestComponent445Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent445Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

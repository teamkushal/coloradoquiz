import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2389Component } from './test-component2389.component';

describe('TestComponent2389Component', () => {
  let component: TestComponent2389Component;
  let fixture: ComponentFixture<TestComponent2389Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2389Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

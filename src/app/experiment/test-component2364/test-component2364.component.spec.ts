import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2364Component } from './test-component2364.component';

describe('TestComponent2364Component', () => {
  let component: TestComponent2364Component;
  let fixture: ComponentFixture<TestComponent2364Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2364Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

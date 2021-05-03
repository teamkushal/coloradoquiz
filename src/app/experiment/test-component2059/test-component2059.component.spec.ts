import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2059Component } from './test-component2059.component';

describe('TestComponent2059Component', () => {
  let component: TestComponent2059Component;
  let fixture: ComponentFixture<TestComponent2059Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2059Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

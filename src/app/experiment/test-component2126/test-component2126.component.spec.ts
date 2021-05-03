import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2126Component } from './test-component2126.component';

describe('TestComponent2126Component', () => {
  let component: TestComponent2126Component;
  let fixture: ComponentFixture<TestComponent2126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2126Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

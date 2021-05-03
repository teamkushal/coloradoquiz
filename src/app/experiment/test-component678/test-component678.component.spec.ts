import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent678Component } from './test-component678.component';

describe('TestComponent678Component', () => {
  let component: TestComponent678Component;
  let fixture: ComponentFixture<TestComponent678Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent678Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

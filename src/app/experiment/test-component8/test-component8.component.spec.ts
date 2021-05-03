import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent8Component } from './test-component8.component';

describe('TestComponent8Component', () => {
  let component: TestComponent8Component;
  let fixture: ComponentFixture<TestComponent8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

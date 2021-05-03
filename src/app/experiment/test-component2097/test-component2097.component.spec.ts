import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2097Component } from './test-component2097.component';

describe('TestComponent2097Component', () => {
  let component: TestComponent2097Component;
  let fixture: ComponentFixture<TestComponent2097Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2097Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

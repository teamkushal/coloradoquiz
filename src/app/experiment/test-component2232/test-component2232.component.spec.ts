import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2232Component } from './test-component2232.component';

describe('TestComponent2232Component', () => {
  let component: TestComponent2232Component;
  let fixture: ComponentFixture<TestComponent2232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2232Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

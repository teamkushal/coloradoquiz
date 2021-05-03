import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2815Component } from './test-component2815.component';

describe('TestComponent2815Component', () => {
  let component: TestComponent2815Component;
  let fixture: ComponentFixture<TestComponent2815Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2815Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

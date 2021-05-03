import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2454Component } from './test-component2454.component';

describe('TestComponent2454Component', () => {
  let component: TestComponent2454Component;
  let fixture: ComponentFixture<TestComponent2454Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2454Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

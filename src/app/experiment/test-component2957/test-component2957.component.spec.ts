import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2957Component } from './test-component2957.component';

describe('TestComponent2957Component', () => {
  let component: TestComponent2957Component;
  let fixture: ComponentFixture<TestComponent2957Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2957Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

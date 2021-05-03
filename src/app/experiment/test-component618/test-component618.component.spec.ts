import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent618Component } from './test-component618.component';

describe('TestComponent618Component', () => {
  let component: TestComponent618Component;
  let fixture: ComponentFixture<TestComponent618Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent618Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent208Component } from './test-component208.component';

describe('TestComponent208Component', () => {
  let component: TestComponent208Component;
  let fixture: ComponentFixture<TestComponent208Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent208Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

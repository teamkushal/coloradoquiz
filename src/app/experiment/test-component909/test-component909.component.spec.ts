import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent909Component } from './test-component909.component';

describe('TestComponent909Component', () => {
  let component: TestComponent909Component;
  let fixture: ComponentFixture<TestComponent909Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent909Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

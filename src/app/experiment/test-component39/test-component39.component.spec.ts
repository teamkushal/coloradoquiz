import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent39Component } from './test-component39.component';

describe('TestComponent39Component', () => {
  let component: TestComponent39Component;
  let fixture: ComponentFixture<TestComponent39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent39Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

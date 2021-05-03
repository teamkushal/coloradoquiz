import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent473Component } from './test-component473.component';

describe('TestComponent473Component', () => {
  let component: TestComponent473Component;
  let fixture: ComponentFixture<TestComponent473Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent473Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

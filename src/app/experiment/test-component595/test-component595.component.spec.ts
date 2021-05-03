import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent595Component } from './test-component595.component';

describe('TestComponent595Component', () => {
  let component: TestComponent595Component;
  let fixture: ComponentFixture<TestComponent595Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent595Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

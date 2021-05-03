import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent293Component } from './test-component293.component';

describe('TestComponent293Component', () => {
  let component: TestComponent293Component;
  let fixture: ComponentFixture<TestComponent293Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent293Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

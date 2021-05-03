import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent424Component } from './test-component424.component';

describe('TestComponent424Component', () => {
  let component: TestComponent424Component;
  let fixture: ComponentFixture<TestComponent424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent424Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

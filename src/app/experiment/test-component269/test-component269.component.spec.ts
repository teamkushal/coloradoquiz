import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent269Component } from './test-component269.component';

describe('TestComponent269Component', () => {
  let component: TestComponent269Component;
  let fixture: ComponentFixture<TestComponent269Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent269Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent607Component } from './test-component607.component';

describe('TestComponent607Component', () => {
  let component: TestComponent607Component;
  let fixture: ComponentFixture<TestComponent607Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent607Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

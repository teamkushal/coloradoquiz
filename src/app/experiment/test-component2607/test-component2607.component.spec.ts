import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2607Component } from './test-component2607.component';

describe('TestComponent2607Component', () => {
  let component: TestComponent2607Component;
  let fixture: ComponentFixture<TestComponent2607Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2607Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

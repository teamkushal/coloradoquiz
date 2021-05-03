import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2763Component } from './test-component2763.component';

describe('TestComponent2763Component', () => {
  let component: TestComponent2763Component;
  let fixture: ComponentFixture<TestComponent2763Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2763Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

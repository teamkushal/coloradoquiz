import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2456Component } from './test-component2456.component';

describe('TestComponent2456Component', () => {
  let component: TestComponent2456Component;
  let fixture: ComponentFixture<TestComponent2456Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2456Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

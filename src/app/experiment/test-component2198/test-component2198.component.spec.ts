import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2198Component } from './test-component2198.component';

describe('TestComponent2198Component', () => {
  let component: TestComponent2198Component;
  let fixture: ComponentFixture<TestComponent2198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2492Component } from './test-component2492.component';

describe('TestComponent2492Component', () => {
  let component: TestComponent2492Component;
  let fixture: ComponentFixture<TestComponent2492Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2492Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

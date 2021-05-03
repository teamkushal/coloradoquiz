import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2928Component } from './test-component2928.component';

describe('TestComponent2928Component', () => {
  let component: TestComponent2928Component;
  let fixture: ComponentFixture<TestComponent2928Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2928Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

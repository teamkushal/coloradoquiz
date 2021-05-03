import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent928Component } from './test-component928.component';

describe('TestComponent928Component', () => {
  let component: TestComponent928Component;
  let fixture: ComponentFixture<TestComponent928Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent928Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

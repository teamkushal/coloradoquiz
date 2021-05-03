import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent871Component } from './test-component871.component';

describe('TestComponent871Component', () => {
  let component: TestComponent871Component;
  let fixture: ComponentFixture<TestComponent871Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent871Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

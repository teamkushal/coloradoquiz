import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1420Component } from './test-component1420.component';

describe('TestComponent1420Component', () => {
  let component: TestComponent1420Component;
  let fixture: ComponentFixture<TestComponent1420Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1420Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

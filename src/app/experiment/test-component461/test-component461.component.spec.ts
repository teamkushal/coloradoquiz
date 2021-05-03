import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent461Component } from './test-component461.component';

describe('TestComponent461Component', () => {
  let component: TestComponent461Component;
  let fixture: ComponentFixture<TestComponent461Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent461Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

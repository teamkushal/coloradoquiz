import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2842Component } from './test-component2842.component';

describe('TestComponent2842Component', () => {
  let component: TestComponent2842Component;
  let fixture: ComponentFixture<TestComponent2842Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2842Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

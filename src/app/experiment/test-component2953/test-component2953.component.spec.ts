import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2953Component } from './test-component2953.component';

describe('TestComponent2953Component', () => {
  let component: TestComponent2953Component;
  let fixture: ComponentFixture<TestComponent2953Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2953Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

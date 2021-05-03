import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2901Component } from './test-component2901.component';

describe('TestComponent2901Component', () => {
  let component: TestComponent2901Component;
  let fixture: ComponentFixture<TestComponent2901Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2901Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

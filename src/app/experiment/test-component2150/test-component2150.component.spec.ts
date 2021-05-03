import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2150Component } from './test-component2150.component';

describe('TestComponent2150Component', () => {
  let component: TestComponent2150Component;
  let fixture: ComponentFixture<TestComponent2150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

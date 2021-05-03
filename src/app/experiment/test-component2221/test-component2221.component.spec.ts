import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2221Component } from './test-component2221.component';

describe('TestComponent2221Component', () => {
  let component: TestComponent2221Component;
  let fixture: ComponentFixture<TestComponent2221Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2221Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2730Component } from './test-component2730.component';

describe('TestComponent2730Component', () => {
  let component: TestComponent2730Component;
  let fixture: ComponentFixture<TestComponent2730Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2730Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

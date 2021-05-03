import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2749Component } from './test-component2749.component';

describe('TestComponent2749Component', () => {
  let component: TestComponent2749Component;
  let fixture: ComponentFixture<TestComponent2749Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2749Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

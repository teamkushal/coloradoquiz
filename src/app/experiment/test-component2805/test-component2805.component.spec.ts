import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2805Component } from './test-component2805.component';

describe('TestComponent2805Component', () => {
  let component: TestComponent2805Component;
  let fixture: ComponentFixture<TestComponent2805Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2805Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

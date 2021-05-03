import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2946Component } from './test-component2946.component';

describe('TestComponent2946Component', () => {
  let component: TestComponent2946Component;
  let fixture: ComponentFixture<TestComponent2946Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2946Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

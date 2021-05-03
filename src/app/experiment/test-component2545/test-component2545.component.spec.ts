import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2545Component } from './test-component2545.component';

describe('TestComponent2545Component', () => {
  let component: TestComponent2545Component;
  let fixture: ComponentFixture<TestComponent2545Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2545Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

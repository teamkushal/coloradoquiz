import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2026Component } from './test-component2026.component';

describe('TestComponent2026Component', () => {
  let component: TestComponent2026Component;
  let fixture: ComponentFixture<TestComponent2026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2026Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

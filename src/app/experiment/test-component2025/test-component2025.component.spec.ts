import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2025Component } from './test-component2025.component';

describe('TestComponent2025Component', () => {
  let component: TestComponent2025Component;
  let fixture: ComponentFixture<TestComponent2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2025Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

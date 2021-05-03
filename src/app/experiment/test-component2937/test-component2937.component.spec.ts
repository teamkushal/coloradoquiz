import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2937Component } from './test-component2937.component';

describe('TestComponent2937Component', () => {
  let component: TestComponent2937Component;
  let fixture: ComponentFixture<TestComponent2937Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2937Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

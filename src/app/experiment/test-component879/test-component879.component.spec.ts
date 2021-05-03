import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent879Component } from './test-component879.component';

describe('TestComponent879Component', () => {
  let component: TestComponent879Component;
  let fixture: ComponentFixture<TestComponent879Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent879Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

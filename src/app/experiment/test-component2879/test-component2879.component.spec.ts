import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2879Component } from './test-component2879.component';

describe('TestComponent2879Component', () => {
  let component: TestComponent2879Component;
  let fixture: ComponentFixture<TestComponent2879Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2879Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent279Component } from './test-component279.component';

describe('TestComponent279Component', () => {
  let component: TestComponent279Component;
  let fixture: ComponentFixture<TestComponent279Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent279Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

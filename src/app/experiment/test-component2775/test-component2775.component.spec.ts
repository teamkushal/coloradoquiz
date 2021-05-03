import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2775Component } from './test-component2775.component';

describe('TestComponent2775Component', () => {
  let component: TestComponent2775Component;
  let fixture: ComponentFixture<TestComponent2775Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2775Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

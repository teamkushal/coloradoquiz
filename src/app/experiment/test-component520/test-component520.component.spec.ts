import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent520Component } from './test-component520.component';

describe('TestComponent520Component', () => {
  let component: TestComponent520Component;
  let fixture: ComponentFixture<TestComponent520Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent520Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

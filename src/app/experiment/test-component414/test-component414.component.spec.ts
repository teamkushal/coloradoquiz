import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent414Component } from './test-component414.component';

describe('TestComponent414Component', () => {
  let component: TestComponent414Component;
  let fixture: ComponentFixture<TestComponent414Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent414Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

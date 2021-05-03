import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent396Component } from './test-component396.component';

describe('TestComponent396Component', () => {
  let component: TestComponent396Component;
  let fixture: ComponentFixture<TestComponent396Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent396Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

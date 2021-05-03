import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent505Component } from './test-component505.component';

describe('TestComponent505Component', () => {
  let component: TestComponent505Component;
  let fixture: ComponentFixture<TestComponent505Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent505Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

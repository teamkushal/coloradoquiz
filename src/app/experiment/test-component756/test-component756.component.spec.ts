import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent756Component } from './test-component756.component';

describe('TestComponent756Component', () => {
  let component: TestComponent756Component;
  let fixture: ComponentFixture<TestComponent756Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent756Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

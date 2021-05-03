import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent235Component } from './test-component235.component';

describe('TestComponent235Component', () => {
  let component: TestComponent235Component;
  let fixture: ComponentFixture<TestComponent235Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent235Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

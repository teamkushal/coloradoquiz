import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent277Component } from './test-component277.component';

describe('TestComponent277Component', () => {
  let component: TestComponent277Component;
  let fixture: ComponentFixture<TestComponent277Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent277Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent18Component } from './test-component18.component';

describe('TestComponent18Component', () => {
  let component: TestComponent18Component;
  let fixture: ComponentFixture<TestComponent18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

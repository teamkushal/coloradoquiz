import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent234Component } from './test-component234.component';

describe('TestComponent234Component', () => {
  let component: TestComponent234Component;
  let fixture: ComponentFixture<TestComponent234Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent234Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2457Component } from './test-component2457.component';

describe('TestComponent2457Component', () => {
  let component: TestComponent2457Component;
  let fixture: ComponentFixture<TestComponent2457Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2457Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent993Component } from './test-component993.component';

describe('TestComponent993Component', () => {
  let component: TestComponent993Component;
  let fixture: ComponentFixture<TestComponent993Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent993Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

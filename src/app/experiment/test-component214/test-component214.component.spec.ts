import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent214Component } from './test-component214.component';

describe('TestComponent214Component', () => {
  let component: TestComponent214Component;
  let fixture: ComponentFixture<TestComponent214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent214Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent140Component } from './test-component140.component';

describe('TestComponent140Component', () => {
  let component: TestComponent140Component;
  let fixture: ComponentFixture<TestComponent140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent623Component } from './test-component623.component';

describe('TestComponent623Component', () => {
  let component: TestComponent623Component;
  let fixture: ComponentFixture<TestComponent623Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent623Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

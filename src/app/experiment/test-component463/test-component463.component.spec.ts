import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent463Component } from './test-component463.component';

describe('TestComponent463Component', () => {
  let component: TestComponent463Component;
  let fixture: ComponentFixture<TestComponent463Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent463Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

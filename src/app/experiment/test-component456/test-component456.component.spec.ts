import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent456Component } from './test-component456.component';

describe('TestComponent456Component', () => {
  let component: TestComponent456Component;
  let fixture: ComponentFixture<TestComponent456Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent456Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

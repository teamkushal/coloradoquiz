import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent236Component } from './test-component236.component';

describe('TestComponent236Component', () => {
  let component: TestComponent236Component;
  let fixture: ComponentFixture<TestComponent236Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent236Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

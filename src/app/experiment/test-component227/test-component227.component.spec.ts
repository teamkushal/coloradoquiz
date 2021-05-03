import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent227Component } from './test-component227.component';

describe('TestComponent227Component', () => {
  let component: TestComponent227Component;
  let fixture: ComponentFixture<TestComponent227Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent227Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

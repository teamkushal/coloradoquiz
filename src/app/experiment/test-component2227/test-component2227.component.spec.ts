import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2227Component } from './test-component2227.component';

describe('TestComponent2227Component', () => {
  let component: TestComponent2227Component;
  let fixture: ComponentFixture<TestComponent2227Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2227Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2416Component } from './test-component2416.component';

describe('TestComponent2416Component', () => {
  let component: TestComponent2416Component;
  let fixture: ComponentFixture<TestComponent2416Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2416Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

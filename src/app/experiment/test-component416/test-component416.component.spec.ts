import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent416Component } from './test-component416.component';

describe('TestComponent416Component', () => {
  let component: TestComponent416Component;
  let fixture: ComponentFixture<TestComponent416Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent416Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

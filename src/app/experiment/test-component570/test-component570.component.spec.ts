import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent570Component } from './test-component570.component';

describe('TestComponent570Component', () => {
  let component: TestComponent570Component;
  let fixture: ComponentFixture<TestComponent570Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent570Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

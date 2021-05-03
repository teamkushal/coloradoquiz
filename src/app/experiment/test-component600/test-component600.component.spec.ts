import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent600Component } from './test-component600.component';

describe('TestComponent600Component', () => {
  let component: TestComponent600Component;
  let fixture: ComponentFixture<TestComponent600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent600Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

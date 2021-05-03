import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent156Component } from './test-component156.component';

describe('TestComponent156Component', () => {
  let component: TestComponent156Component;
  let fixture: ComponentFixture<TestComponent156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent156Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent602Component } from './test-component602.component';

describe('TestComponent602Component', () => {
  let component: TestComponent602Component;
  let fixture: ComponentFixture<TestComponent602Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent602Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

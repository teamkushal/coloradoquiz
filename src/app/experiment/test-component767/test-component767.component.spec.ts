import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent767Component } from './test-component767.component';

describe('TestComponent767Component', () => {
  let component: TestComponent767Component;
  let fixture: ComponentFixture<TestComponent767Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent767Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

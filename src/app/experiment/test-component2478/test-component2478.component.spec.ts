import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2478Component } from './test-component2478.component';

describe('TestComponent2478Component', () => {
  let component: TestComponent2478Component;
  let fixture: ComponentFixture<TestComponent2478Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2478Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

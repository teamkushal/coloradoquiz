import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1151Component } from './test-component1151.component';

describe('TestComponent1151Component', () => {
  let component: TestComponent1151Component;
  let fixture: ComponentFixture<TestComponent1151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

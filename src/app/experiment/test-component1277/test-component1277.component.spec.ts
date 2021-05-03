import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1277Component } from './test-component1277.component';

describe('TestComponent1277Component', () => {
  let component: TestComponent1277Component;
  let fixture: ComponentFixture<TestComponent1277Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1277Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

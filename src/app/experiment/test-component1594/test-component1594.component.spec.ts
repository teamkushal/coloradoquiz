import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1594Component } from './test-component1594.component';

describe('TestComponent1594Component', () => {
  let component: TestComponent1594Component;
  let fixture: ComponentFixture<TestComponent1594Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1594Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

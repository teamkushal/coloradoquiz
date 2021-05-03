import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1784Component } from './test-component1784.component';

describe('TestComponent1784Component', () => {
  let component: TestComponent1784Component;
  let fixture: ComponentFixture<TestComponent1784Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1784Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

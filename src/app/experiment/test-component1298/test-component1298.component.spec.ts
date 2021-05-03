import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1298Component } from './test-component1298.component';

describe('TestComponent1298Component', () => {
  let component: TestComponent1298Component;
  let fixture: ComponentFixture<TestComponent1298Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1298Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

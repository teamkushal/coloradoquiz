import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1546Component } from './test-component1546.component';

describe('TestComponent1546Component', () => {
  let component: TestComponent1546Component;
  let fixture: ComponentFixture<TestComponent1546Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1546Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

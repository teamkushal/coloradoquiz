import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1400Component } from './test-component1400.component';

describe('TestComponent1400Component', () => {
  let component: TestComponent1400Component;
  let fixture: ComponentFixture<TestComponent1400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

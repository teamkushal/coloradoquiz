import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1184Component } from './test-component1184.component';

describe('TestComponent1184Component', () => {
  let component: TestComponent1184Component;
  let fixture: ComponentFixture<TestComponent1184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1184Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

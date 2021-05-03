import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1227Component } from './test-component1227.component';

describe('TestComponent1227Component', () => {
  let component: TestComponent1227Component;
  let fixture: ComponentFixture<TestComponent1227Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1227Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

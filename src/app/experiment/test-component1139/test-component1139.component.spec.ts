import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1139Component } from './test-component1139.component';

describe('TestComponent1139Component', () => {
  let component: TestComponent1139Component;
  let fixture: ComponentFixture<TestComponent1139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

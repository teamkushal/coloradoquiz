import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1168Component } from './test-component1168.component';

describe('TestComponent1168Component', () => {
  let component: TestComponent1168Component;
  let fixture: ComponentFixture<TestComponent1168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1168Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

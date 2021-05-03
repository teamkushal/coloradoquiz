import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1179Component } from './test-component1179.component';

describe('TestComponent1179Component', () => {
  let component: TestComponent1179Component;
  let fixture: ComponentFixture<TestComponent1179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1179Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2708Component } from './test-component2708.component';

describe('TestComponent2708Component', () => {
  let component: TestComponent2708Component;
  let fixture: ComponentFixture<TestComponent2708Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2708Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

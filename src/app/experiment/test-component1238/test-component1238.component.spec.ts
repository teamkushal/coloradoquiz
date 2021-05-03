import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1238Component } from './test-component1238.component';

describe('TestComponent1238Component', () => {
  let component: TestComponent1238Component;
  let fixture: ComponentFixture<TestComponent1238Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1238Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

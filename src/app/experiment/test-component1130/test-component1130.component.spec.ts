import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1130Component } from './test-component1130.component';

describe('TestComponent1130Component', () => {
  let component: TestComponent1130Component;
  let fixture: ComponentFixture<TestComponent1130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

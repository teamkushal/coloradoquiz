import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1640Component } from './test-component1640.component';

describe('TestComponent1640Component', () => {
  let component: TestComponent1640Component;
  let fixture: ComponentFixture<TestComponent1640Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1640Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

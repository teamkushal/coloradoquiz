import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1527Component } from './test-component1527.component';

describe('TestComponent1527Component', () => {
  let component: TestComponent1527Component;
  let fixture: ComponentFixture<TestComponent1527Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1527Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

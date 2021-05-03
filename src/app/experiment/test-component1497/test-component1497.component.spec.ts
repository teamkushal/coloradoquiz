import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1497Component } from './test-component1497.component';

describe('TestComponent1497Component', () => {
  let component: TestComponent1497Component;
  let fixture: ComponentFixture<TestComponent1497Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1497Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

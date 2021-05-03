import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1423Component } from './test-component1423.component';

describe('TestComponent1423Component', () => {
  let component: TestComponent1423Component;
  let fixture: ComponentFixture<TestComponent1423Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1423Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

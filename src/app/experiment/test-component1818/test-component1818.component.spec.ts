import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1818Component } from './test-component1818.component';

describe('TestComponent1818Component', () => {
  let component: TestComponent1818Component;
  let fixture: ComponentFixture<TestComponent1818Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1818Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

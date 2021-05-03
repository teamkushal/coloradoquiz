import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1870Component } from './test-component1870.component';

describe('TestComponent1870Component', () => {
  let component: TestComponent1870Component;
  let fixture: ComponentFixture<TestComponent1870Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1870Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

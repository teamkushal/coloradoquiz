import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1914Component } from './test-component1914.component';

describe('TestComponent1914Component', () => {
  let component: TestComponent1914Component;
  let fixture: ComponentFixture<TestComponent1914Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1914Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

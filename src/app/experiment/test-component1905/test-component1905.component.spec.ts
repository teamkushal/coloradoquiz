import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1905Component } from './test-component1905.component';

describe('TestComponent1905Component', () => {
  let component: TestComponent1905Component;
  let fixture: ComponentFixture<TestComponent1905Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1905Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1161Component } from './test-component1161.component';

describe('TestComponent1161Component', () => {
  let component: TestComponent1161Component;
  let fixture: ComponentFixture<TestComponent1161Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1161Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

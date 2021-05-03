import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1865Component } from './test-component1865.component';

describe('TestComponent1865Component', () => {
  let component: TestComponent1865Component;
  let fixture: ComponentFixture<TestComponent1865Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1865Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

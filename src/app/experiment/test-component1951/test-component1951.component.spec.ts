import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1951Component } from './test-component1951.component';

describe('TestComponent1951Component', () => {
  let component: TestComponent1951Component;
  let fixture: ComponentFixture<TestComponent1951Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1951Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

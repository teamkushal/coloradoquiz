import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1976Component } from './test-component1976.component';

describe('TestComponent1976Component', () => {
  let component: TestComponent1976Component;
  let fixture: ComponentFixture<TestComponent1976Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1976Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

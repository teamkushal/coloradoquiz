import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1275Component } from './test-component1275.component';

describe('TestComponent1275Component', () => {
  let component: TestComponent1275Component;
  let fixture: ComponentFixture<TestComponent1275Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1275Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1408Component } from './test-component1408.component';

describe('TestComponent1408Component', () => {
  let component: TestComponent1408Component;
  let fixture: ComponentFixture<TestComponent1408Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1408Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

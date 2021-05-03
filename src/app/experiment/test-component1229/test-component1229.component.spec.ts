import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1229Component } from './test-component1229.component';

describe('TestComponent1229Component', () => {
  let component: TestComponent1229Component;
  let fixture: ComponentFixture<TestComponent1229Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1229Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

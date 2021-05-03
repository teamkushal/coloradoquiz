import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1657Component } from './test-component1657.component';

describe('TestComponent1657Component', () => {
  let component: TestComponent1657Component;
  let fixture: ComponentFixture<TestComponent1657Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1657Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

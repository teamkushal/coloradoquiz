import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1265Component } from './test-component1265.component';

describe('TestComponent1265Component', () => {
  let component: TestComponent1265Component;
  let fixture: ComponentFixture<TestComponent1265Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1265Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

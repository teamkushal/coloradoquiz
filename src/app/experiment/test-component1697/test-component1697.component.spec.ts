import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1697Component } from './test-component1697.component';

describe('TestComponent1697Component', () => {
  let component: TestComponent1697Component;
  let fixture: ComponentFixture<TestComponent1697Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1697Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

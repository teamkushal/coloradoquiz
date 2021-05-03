import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1041Component } from './test-component1041.component';

describe('TestComponent1041Component', () => {
  let component: TestComponent1041Component;
  let fixture: ComponentFixture<TestComponent1041Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1041Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

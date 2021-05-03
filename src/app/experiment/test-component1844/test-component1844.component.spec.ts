import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1844Component } from './test-component1844.component';

describe('TestComponent1844Component', () => {
  let component: TestComponent1844Component;
  let fixture: ComponentFixture<TestComponent1844Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1844Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

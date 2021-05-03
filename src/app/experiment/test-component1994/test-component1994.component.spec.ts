import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1994Component } from './test-component1994.component';

describe('TestComponent1994Component', () => {
  let component: TestComponent1994Component;
  let fixture: ComponentFixture<TestComponent1994Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1994Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

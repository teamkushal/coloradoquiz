import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1993Component } from './test-component1993.component';

describe('TestComponent1993Component', () => {
  let component: TestComponent1993Component;
  let fixture: ComponentFixture<TestComponent1993Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1993Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

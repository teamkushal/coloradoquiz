import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1961Component } from './test-component1961.component';

describe('TestComponent1961Component', () => {
  let component: TestComponent1961Component;
  let fixture: ComponentFixture<TestComponent1961Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1961Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

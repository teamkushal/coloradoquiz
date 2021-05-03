import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1013Component } from './test-component1013.component';

describe('TestComponent1013Component', () => {
  let component: TestComponent1013Component;
  let fixture: ComponentFixture<TestComponent1013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1013Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

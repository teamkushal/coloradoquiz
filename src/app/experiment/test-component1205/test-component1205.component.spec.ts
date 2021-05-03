import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1205Component } from './test-component1205.component';

describe('TestComponent1205Component', () => {
  let component: TestComponent1205Component;
  let fixture: ComponentFixture<TestComponent1205Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1205Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

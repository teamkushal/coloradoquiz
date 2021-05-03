import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1320Component } from './test-component1320.component';

describe('TestComponent1320Component', () => {
  let component: TestComponent1320Component;
  let fixture: ComponentFixture<TestComponent1320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1320Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

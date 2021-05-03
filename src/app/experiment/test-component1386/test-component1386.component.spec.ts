import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1386Component } from './test-component1386.component';

describe('TestComponent1386Component', () => {
  let component: TestComponent1386Component;
  let fixture: ComponentFixture<TestComponent1386Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1386Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1465Component } from './test-component1465.component';

describe('TestComponent1465Component', () => {
  let component: TestComponent1465Component;
  let fixture: ComponentFixture<TestComponent1465Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1465Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1962Component } from './test-component1962.component';

describe('TestComponent1962Component', () => {
  let component: TestComponent1962Component;
  let fixture: ComponentFixture<TestComponent1962Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1962Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

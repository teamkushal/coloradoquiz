import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1609Component } from './test-component1609.component';

describe('TestComponent1609Component', () => {
  let component: TestComponent1609Component;
  let fixture: ComponentFixture<TestComponent1609Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1609Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1954Component } from './test-component1954.component';

describe('TestComponent1954Component', () => {
  let component: TestComponent1954Component;
  let fixture: ComponentFixture<TestComponent1954Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1954Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

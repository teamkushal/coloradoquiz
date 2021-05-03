import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1790Component } from './test-component1790.component';

describe('TestComponent1790Component', () => {
  let component: TestComponent1790Component;
  let fixture: ComponentFixture<TestComponent1790Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1790Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

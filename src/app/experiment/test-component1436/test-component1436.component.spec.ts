import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1436Component } from './test-component1436.component';

describe('TestComponent1436Component', () => {
  let component: TestComponent1436Component;
  let fixture: ComponentFixture<TestComponent1436Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1436Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

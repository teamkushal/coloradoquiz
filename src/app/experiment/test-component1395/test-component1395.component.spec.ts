import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1395Component } from './test-component1395.component';

describe('TestComponent1395Component', () => {
  let component: TestComponent1395Component;
  let fixture: ComponentFixture<TestComponent1395Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1395Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

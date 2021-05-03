import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1492Component } from './test-component1492.component';

describe('TestComponent1492Component', () => {
  let component: TestComponent1492Component;
  let fixture: ComponentFixture<TestComponent1492Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1492Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

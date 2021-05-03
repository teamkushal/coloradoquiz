import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1591Component } from './test-component1591.component';

describe('TestComponent1591Component', () => {
  let component: TestComponent1591Component;
  let fixture: ComponentFixture<TestComponent1591Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1591Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

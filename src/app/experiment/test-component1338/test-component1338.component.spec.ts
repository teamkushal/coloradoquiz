import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1338Component } from './test-component1338.component';

describe('TestComponent1338Component', () => {
  let component: TestComponent1338Component;
  let fixture: ComponentFixture<TestComponent1338Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1338Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

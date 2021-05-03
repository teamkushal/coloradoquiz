import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1164Component } from './test-component1164.component';

describe('TestComponent1164Component', () => {
  let component: TestComponent1164Component;
  let fixture: ComponentFixture<TestComponent1164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1164Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

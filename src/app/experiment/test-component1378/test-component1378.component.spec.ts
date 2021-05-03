import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1378Component } from './test-component1378.component';

describe('TestComponent1378Component', () => {
  let component: TestComponent1378Component;
  let fixture: ComponentFixture<TestComponent1378Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1378Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

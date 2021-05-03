import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1474Component } from './test-component1474.component';

describe('TestComponent1474Component', () => {
  let component: TestComponent1474Component;
  let fixture: ComponentFixture<TestComponent1474Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1474Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1806Component } from './test-component1806.component';

describe('TestComponent1806Component', () => {
  let component: TestComponent1806Component;
  let fixture: ComponentFixture<TestComponent1806Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1806Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

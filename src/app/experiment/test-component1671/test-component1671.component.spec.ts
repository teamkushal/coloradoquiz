import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1671Component } from './test-component1671.component';

describe('TestComponent1671Component', () => {
  let component: TestComponent1671Component;
  let fixture: ComponentFixture<TestComponent1671Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1671Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

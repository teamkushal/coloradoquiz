import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1467Component } from './test-component1467.component';

describe('TestComponent1467Component', () => {
  let component: TestComponent1467Component;
  let fixture: ComponentFixture<TestComponent1467Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1467Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

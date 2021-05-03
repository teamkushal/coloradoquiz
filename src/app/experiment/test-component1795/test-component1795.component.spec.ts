import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1795Component } from './test-component1795.component';

describe('TestComponent1795Component', () => {
  let component: TestComponent1795Component;
  let fixture: ComponentFixture<TestComponent1795Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1795Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

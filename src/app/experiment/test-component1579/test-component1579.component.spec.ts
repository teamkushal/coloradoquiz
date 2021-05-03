import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1579Component } from './test-component1579.component';

describe('TestComponent1579Component', () => {
  let component: TestComponent1579Component;
  let fixture: ComponentFixture<TestComponent1579Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1579Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

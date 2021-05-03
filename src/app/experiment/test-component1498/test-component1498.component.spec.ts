import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1498Component } from './test-component1498.component';

describe('TestComponent1498Component', () => {
  let component: TestComponent1498Component;
  let fixture: ComponentFixture<TestComponent1498Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1498Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

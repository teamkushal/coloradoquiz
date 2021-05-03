import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1213Component } from './test-component1213.component';

describe('TestComponent1213Component', () => {
  let component: TestComponent1213Component;
  let fixture: ComponentFixture<TestComponent1213Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1213Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

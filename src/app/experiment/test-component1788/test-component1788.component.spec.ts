import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1788Component } from './test-component1788.component';

describe('TestComponent1788Component', () => {
  let component: TestComponent1788Component;
  let fixture: ComponentFixture<TestComponent1788Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1788Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

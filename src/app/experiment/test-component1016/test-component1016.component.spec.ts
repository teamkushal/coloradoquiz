import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1016Component } from './test-component1016.component';

describe('TestComponent1016Component', () => {
  let component: TestComponent1016Component;
  let fixture: ComponentFixture<TestComponent1016Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1016Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

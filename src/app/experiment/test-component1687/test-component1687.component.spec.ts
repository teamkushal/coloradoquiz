import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1687Component } from './test-component1687.component';

describe('TestComponent1687Component', () => {
  let component: TestComponent1687Component;
  let fixture: ComponentFixture<TestComponent1687Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1687Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

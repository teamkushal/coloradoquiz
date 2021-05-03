import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1313Component } from './test-component1313.component';

describe('TestComponent1313Component', () => {
  let component: TestComponent1313Component;
  let fixture: ComponentFixture<TestComponent1313Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1313Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1752Component } from './test-component1752.component';

describe('TestComponent1752Component', () => {
  let component: TestComponent1752Component;
  let fixture: ComponentFixture<TestComponent1752Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1752Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

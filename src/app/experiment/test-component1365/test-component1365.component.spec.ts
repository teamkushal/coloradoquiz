import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1365Component } from './test-component1365.component';

describe('TestComponent1365Component', () => {
  let component: TestComponent1365Component;
  let fixture: ComponentFixture<TestComponent1365Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1365Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1217Component } from './test-component1217.component';

describe('TestComponent1217Component', () => {
  let component: TestComponent1217Component;
  let fixture: ComponentFixture<TestComponent1217Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1217Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

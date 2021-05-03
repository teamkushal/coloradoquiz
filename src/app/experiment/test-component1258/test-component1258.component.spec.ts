import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1258Component } from './test-component1258.component';

describe('TestComponent1258Component', () => {
  let component: TestComponent1258Component;
  let fixture: ComponentFixture<TestComponent1258Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1258Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

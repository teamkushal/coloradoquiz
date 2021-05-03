import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1247Component } from './test-component1247.component';

describe('TestComponent1247Component', () => {
  let component: TestComponent1247Component;
  let fixture: ComponentFixture<TestComponent1247Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1247Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

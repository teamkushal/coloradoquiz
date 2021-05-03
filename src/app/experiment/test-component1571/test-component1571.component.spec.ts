import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1571Component } from './test-component1571.component';

describe('TestComponent1571Component', () => {
  let component: TestComponent1571Component;
  let fixture: ComponentFixture<TestComponent1571Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1571Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

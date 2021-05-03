import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1437Component } from './test-component1437.component';

describe('TestComponent1437Component', () => {
  let component: TestComponent1437Component;
  let fixture: ComponentFixture<TestComponent1437Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1437Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

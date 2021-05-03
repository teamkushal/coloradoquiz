import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1352Component } from './test-component1352.component';

describe('TestComponent1352Component', () => {
  let component: TestComponent1352Component;
  let fixture: ComponentFixture<TestComponent1352Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1352Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

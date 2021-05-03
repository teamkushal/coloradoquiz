import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1210Component } from './test-component1210.component';

describe('TestComponent1210Component', () => {
  let component: TestComponent1210Component;
  let fixture: ComponentFixture<TestComponent1210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1210Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

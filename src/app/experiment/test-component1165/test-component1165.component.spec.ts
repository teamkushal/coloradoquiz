import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1165Component } from './test-component1165.component';

describe('TestComponent1165Component', () => {
  let component: TestComponent1165Component;
  let fixture: ComponentFixture<TestComponent1165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1165Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

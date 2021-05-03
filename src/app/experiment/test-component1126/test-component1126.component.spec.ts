import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1126Component } from './test-component1126.component';

describe('TestComponent1126Component', () => {
  let component: TestComponent1126Component;
  let fixture: ComponentFixture<TestComponent1126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1126Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

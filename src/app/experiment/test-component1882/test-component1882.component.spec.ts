import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1882Component } from './test-component1882.component';

describe('TestComponent1882Component', () => {
  let component: TestComponent1882Component;
  let fixture: ComponentFixture<TestComponent1882Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1882Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

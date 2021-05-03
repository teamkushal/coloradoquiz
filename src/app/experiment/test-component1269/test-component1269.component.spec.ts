import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1269Component } from './test-component1269.component';

describe('TestComponent1269Component', () => {
  let component: TestComponent1269Component;
  let fixture: ComponentFixture<TestComponent1269Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1269Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

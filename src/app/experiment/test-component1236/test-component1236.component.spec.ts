import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1236Component } from './test-component1236.component';

describe('TestComponent1236Component', () => {
  let component: TestComponent1236Component;
  let fixture: ComponentFixture<TestComponent1236Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1236Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

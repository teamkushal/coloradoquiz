import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1091Component } from './test-component1091.component';

describe('TestComponent1091Component', () => {
  let component: TestComponent1091Component;
  let fixture: ComponentFixture<TestComponent1091Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1091Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

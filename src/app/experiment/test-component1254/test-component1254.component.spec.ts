import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1254Component } from './test-component1254.component';

describe('TestComponent1254Component', () => {
  let component: TestComponent1254Component;
  let fixture: ComponentFixture<TestComponent1254Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1254Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

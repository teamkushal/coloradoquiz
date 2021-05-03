import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1461Component } from './test-component1461.component';

describe('TestComponent1461Component', () => {
  let component: TestComponent1461Component;
  let fixture: ComponentFixture<TestComponent1461Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1461Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

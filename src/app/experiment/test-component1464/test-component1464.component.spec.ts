import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1464Component } from './test-component1464.component';

describe('TestComponent1464Component', () => {
  let component: TestComponent1464Component;
  let fixture: ComponentFixture<TestComponent1464Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1464Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

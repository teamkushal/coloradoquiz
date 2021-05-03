import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1292Component } from './test-component1292.component';

describe('TestComponent1292Component', () => {
  let component: TestComponent1292Component;
  let fixture: ComponentFixture<TestComponent1292Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1292Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

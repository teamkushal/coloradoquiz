import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1272Component } from './test-component1272.component';

describe('TestComponent1272Component', () => {
  let component: TestComponent1272Component;
  let fixture: ComponentFixture<TestComponent1272Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1272Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1947Component } from './test-component1947.component';

describe('TestComponent1947Component', () => {
  let component: TestComponent1947Component;
  let fixture: ComponentFixture<TestComponent1947Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1947Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

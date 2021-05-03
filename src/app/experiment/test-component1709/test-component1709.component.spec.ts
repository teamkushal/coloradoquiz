import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1709Component } from './test-component1709.component';

describe('TestComponent1709Component', () => {
  let component: TestComponent1709Component;
  let fixture: ComponentFixture<TestComponent1709Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1709Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

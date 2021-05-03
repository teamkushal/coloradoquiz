import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1234Component } from './test-component1234.component';

describe('TestComponent1234Component', () => {
  let component: TestComponent1234Component;
  let fixture: ComponentFixture<TestComponent1234Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1234Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

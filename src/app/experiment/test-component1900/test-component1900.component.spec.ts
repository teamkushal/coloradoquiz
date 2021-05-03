import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1900Component } from './test-component1900.component';

describe('TestComponent1900Component', () => {
  let component: TestComponent1900Component;
  let fixture: ComponentFixture<TestComponent1900Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1900Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

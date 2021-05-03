import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1123Component } from './test-component1123.component';

describe('TestComponent1123Component', () => {
  let component: TestComponent1123Component;
  let fixture: ComponentFixture<TestComponent1123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

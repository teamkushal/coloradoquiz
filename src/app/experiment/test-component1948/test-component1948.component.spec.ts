import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1948Component } from './test-component1948.component';

describe('TestComponent1948Component', () => {
  let component: TestComponent1948Component;
  let fixture: ComponentFixture<TestComponent1948Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1948Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

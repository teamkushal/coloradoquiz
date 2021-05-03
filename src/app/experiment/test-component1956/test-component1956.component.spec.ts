import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1956Component } from './test-component1956.component';

describe('TestComponent1956Component', () => {
  let component: TestComponent1956Component;
  let fixture: ComponentFixture<TestComponent1956Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1956Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

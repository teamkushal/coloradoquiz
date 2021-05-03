import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2035Component } from './test-component2035.component';

describe('TestComponent2035Component', () => {
  let component: TestComponent2035Component;
  let fixture: ComponentFixture<TestComponent2035Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2035Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2481Component } from './test-component2481.component';

describe('TestComponent2481Component', () => {
  let component: TestComponent2481Component;
  let fixture: ComponentFixture<TestComponent2481Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2481Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

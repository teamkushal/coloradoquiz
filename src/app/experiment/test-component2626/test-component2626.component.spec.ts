import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2626Component } from './test-component2626.component';

describe('TestComponent2626Component', () => {
  let component: TestComponent2626Component;
  let fixture: ComponentFixture<TestComponent2626Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2626Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

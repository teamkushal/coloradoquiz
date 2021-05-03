import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2407Component } from './test-component2407.component';

describe('TestComponent2407Component', () => {
  let component: TestComponent2407Component;
  let fixture: ComponentFixture<TestComponent2407Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2407Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

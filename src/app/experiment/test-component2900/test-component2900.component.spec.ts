import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2900Component } from './test-component2900.component';

describe('TestComponent2900Component', () => {
  let component: TestComponent2900Component;
  let fixture: ComponentFixture<TestComponent2900Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2900Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

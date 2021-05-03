import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2328Component } from './test-component2328.component';

describe('TestComponent2328Component', () => {
  let component: TestComponent2328Component;
  let fixture: ComponentFixture<TestComponent2328Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2328Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2733Component } from './test-component2733.component';

describe('TestComponent2733Component', () => {
  let component: TestComponent2733Component;
  let fixture: ComponentFixture<TestComponent2733Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2733Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

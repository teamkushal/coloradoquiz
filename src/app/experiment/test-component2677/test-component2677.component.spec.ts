import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2677Component } from './test-component2677.component';

describe('TestComponent2677Component', () => {
  let component: TestComponent2677Component;
  let fixture: ComponentFixture<TestComponent2677Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2677Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

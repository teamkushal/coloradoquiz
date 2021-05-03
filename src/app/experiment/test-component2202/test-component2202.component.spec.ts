import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2202Component } from './test-component2202.component';

describe('TestComponent2202Component', () => {
  let component: TestComponent2202Component;
  let fixture: ComponentFixture<TestComponent2202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2202Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

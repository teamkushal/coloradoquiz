import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2101Component } from './test-component2101.component';

describe('TestComponent2101Component', () => {
  let component: TestComponent2101Component;
  let fixture: ComponentFixture<TestComponent2101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

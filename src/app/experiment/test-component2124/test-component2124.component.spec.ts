import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2124Component } from './test-component2124.component';

describe('TestComponent2124Component', () => {
  let component: TestComponent2124Component;
  let fixture: ComponentFixture<TestComponent2124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

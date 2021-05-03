import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2163Component } from './test-component2163.component';

describe('TestComponent2163Component', () => {
  let component: TestComponent2163Component;
  let fixture: ComponentFixture<TestComponent2163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2163Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2961Component } from './test-component2961.component';

describe('TestComponent2961Component', () => {
  let component: TestComponent2961Component;
  let fixture: ComponentFixture<TestComponent2961Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2961Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

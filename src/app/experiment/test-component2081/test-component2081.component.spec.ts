import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2081Component } from './test-component2081.component';

describe('TestComponent2081Component', () => {
  let component: TestComponent2081Component;
  let fixture: ComponentFixture<TestComponent2081Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2081Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

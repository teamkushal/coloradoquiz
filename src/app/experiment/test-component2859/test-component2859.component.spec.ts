import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2859Component } from './test-component2859.component';

describe('TestComponent2859Component', () => {
  let component: TestComponent2859Component;
  let fixture: ComponentFixture<TestComponent2859Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2859Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

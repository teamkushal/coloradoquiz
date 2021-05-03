import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2624Component } from './test-component2624.component';

describe('TestComponent2624Component', () => {
  let component: TestComponent2624Component;
  let fixture: ComponentFixture<TestComponent2624Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2624Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

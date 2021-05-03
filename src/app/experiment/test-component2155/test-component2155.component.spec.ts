import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2155Component } from './test-component2155.component';

describe('TestComponent2155Component', () => {
  let component: TestComponent2155Component;
  let fixture: ComponentFixture<TestComponent2155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

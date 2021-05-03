import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2579Component } from './test-component2579.component';

describe('TestComponent2579Component', () => {
  let component: TestComponent2579Component;
  let fixture: ComponentFixture<TestComponent2579Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2579Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2136Component } from './test-component2136.component';

describe('TestComponent2136Component', () => {
  let component: TestComponent2136Component;
  let fixture: ComponentFixture<TestComponent2136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2136Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

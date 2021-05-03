import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2590Component } from './test-component2590.component';

describe('TestComponent2590Component', () => {
  let component: TestComponent2590Component;
  let fixture: ComponentFixture<TestComponent2590Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2590Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

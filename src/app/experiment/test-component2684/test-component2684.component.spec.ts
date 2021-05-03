import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2684Component } from './test-component2684.component';

describe('TestComponent2684Component', () => {
  let component: TestComponent2684Component;
  let fixture: ComponentFixture<TestComponent2684Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2684Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

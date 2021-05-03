import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2595Component } from './test-component2595.component';

describe('TestComponent2595Component', () => {
  let component: TestComponent2595Component;
  let fixture: ComponentFixture<TestComponent2595Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2595Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2909Component } from './test-component2909.component';

describe('TestComponent2909Component', () => {
  let component: TestComponent2909Component;
  let fixture: ComponentFixture<TestComponent2909Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2909Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

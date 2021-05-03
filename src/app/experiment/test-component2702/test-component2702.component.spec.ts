import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2702Component } from './test-component2702.component';

describe('TestComponent2702Component', () => {
  let component: TestComponent2702Component;
  let fixture: ComponentFixture<TestComponent2702Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2702Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

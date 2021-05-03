import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2787Component } from './test-component2787.component';

describe('TestComponent2787Component', () => {
  let component: TestComponent2787Component;
  let fixture: ComponentFixture<TestComponent2787Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2787Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

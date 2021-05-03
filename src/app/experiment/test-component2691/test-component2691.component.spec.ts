import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2691Component } from './test-component2691.component';

describe('TestComponent2691Component', () => {
  let component: TestComponent2691Component;
  let fixture: ComponentFixture<TestComponent2691Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2691Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

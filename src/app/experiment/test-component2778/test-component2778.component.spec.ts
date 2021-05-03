import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2778Component } from './test-component2778.component';

describe('TestComponent2778Component', () => {
  let component: TestComponent2778Component;
  let fixture: ComponentFixture<TestComponent2778Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2778Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

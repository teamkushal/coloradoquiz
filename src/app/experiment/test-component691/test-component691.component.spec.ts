import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent691Component } from './test-component691.component';

describe('TestComponent691Component', () => {
  let component: TestComponent691Component;
  let fixture: ComponentFixture<TestComponent691Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent691Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

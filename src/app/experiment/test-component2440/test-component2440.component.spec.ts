import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2440Component } from './test-component2440.component';

describe('TestComponent2440Component', () => {
  let component: TestComponent2440Component;
  let fixture: ComponentFixture<TestComponent2440Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2440Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

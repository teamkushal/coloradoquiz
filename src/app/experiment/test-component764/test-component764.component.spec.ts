import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent764Component } from './test-component764.component';

describe('TestComponent764Component', () => {
  let component: TestComponent764Component;
  let fixture: ComponentFixture<TestComponent764Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent764Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

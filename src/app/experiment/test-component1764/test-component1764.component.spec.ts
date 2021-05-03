import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1764Component } from './test-component1764.component';

describe('TestComponent1764Component', () => {
  let component: TestComponent1764Component;
  let fixture: ComponentFixture<TestComponent1764Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1764Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

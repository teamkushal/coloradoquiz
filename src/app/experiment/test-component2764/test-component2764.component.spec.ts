import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2764Component } from './test-component2764.component';

describe('TestComponent2764Component', () => {
  let component: TestComponent2764Component;
  let fixture: ComponentFixture<TestComponent2764Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2764Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
